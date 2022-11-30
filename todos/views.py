from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import get_user_model as User
from .forms import TodosForm, TimetableForm
from .models import Timetable, Todos
from datetime import datetime


# Create your views here.
def today(request):
    user_pk = request.user.pk
    today = str(datetime.now())[:10]
    # 로그인 유저의 today todos 찾기
    user_todos = Todos.objects.filter(user_id=request.user)
    today_todos_all = Todos.objects.filter(started_at=today)
    today_todos = user_todos & today_todos_all
    todosForm = TodosForm()

    context = {
        "today_todos": today_todos,
        "todosForm": todosForm,
        "user_todos": user_todos,
    }
    return render(request, "todos/complete/today_main.html", context)


def create(request):
    user = request.user
    if request.method == "POST":
        # 테스트
        date = request.POST.get("date")
        day = request.POST.get("day")
        #
        todoForm = TodosForm(request.POST, request.FILES)
        if todoForm.is_valid():
            todo = todoForm.save(commit=False)
            todo.user_id = user
            # 테스트
            todo.started_at = date
            todo.expired_at = date
            #
            todo.save()
        return redirect("todos:today")  # 추후에 비동기로 반드시 바꾸어 줘야 함.
    else:  # 테스트용
        todoForm = TodosForm()
    context = {
        "todoForm": todoForm,
    }
    return render(request, "todos/working/test_create.html", context)


def timetable(request):
    if request.method == "POST":
        timetable_form = TimetableForm(request.POST)
        if timetable_form.is_valid():
            timetable_form.save()
    return redirect("todos:today")


def delete(request, todos_pk):
    if request.method == "POST":
        todo = Todos.objects.get(pk=todos_pk)
        todo.delete()
    return redirect("todos:today")  # 추후에 비동기로 바꾸는거 권장


def week(request):
    # 미완성
    # 1
    # 날짜를 어떻게 받을지 아직 못정함.
    # 화면에 할일을 클릭은 주소 url이 좋을거 같지만
    # 여기서 값을 받는것은 JS를 활용한 input값 받기 일거 같다.
    # sunday_todos = Todos.objects.filter(started_at="일")
    # monday_todos = Todos.objects.filter(started_at="월")
    # tuesday_todos = Todos.objects.filter(started_at="화")
    # wednesday_todos = Todos.objects.filter(started_at="수")
    # thursday_todos = Todos.objects.filter(started_at="목")
    # friday_todos = Todos.objects.filter(started_at="금")
    # saturday_todos = Todos.objects.filter(started_at="토")
    # 다음주 지난주 클릭은 비동기로 axios를 사용하여 서버와 통신하게 만들어야 될 거 같다.

    # 2
    # 과거인지 지금 혹은 미래인지 구분하기
    # 장고에서 날짜 비교가 되는지 모르겠다.
    # 비교가 된다면
    # if 2022-11-29 <= 2022-12-01:
    #   a = True
    # else:
    #   a = False
    # 해서 7개의 변수를 만들어서 context로 보내준다.

    # 3
    todos = TodosForm()
    context = {
        "todos": todos,
    }
    return render(request, "todos/working/week_todos.html", context)


def read_all(request):
    todos = Todos.objects.filter(user_id=request.user).order_by("started_at")
    # 값 보내기 위한 알고리즘
    time = ""
    time2 = ""
    all_days = []
    for todo in todos:
        if time != todo.started_at:
            time = todo.started_at
            time2 = todo
            all_days.append([])
            all_days[-1].append(time2)
        else:
            time2 = todo
            all_days[-1].append(time2)
    context = {
        "all_days": all_days,
    }
    return render(request, "todos/working/read_all.html", context)
