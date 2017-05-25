class HomeController < ApplicationController
  def index
  end
  
  

  def sub1 
    # nol-pago
    
    # pick-course
    @food = %w{비빔면대패삼겹(경제) 후끈후끈세트(경제) 라면주먹밥(경제) 닭꼬치(경제) 팥빙수(경제) 오이냉국(경제) 파채라면(경제) 목살야채무침(경영) 후르츠칵테일(경영) 비밈면(경영)}.sample
    @place = %w{클럽 주점 영디 코딩}.sample
    @act = %w{행동 뭐 케케}.sample
    
    # pick-games
    @luck = %w{꽝! 당첨! 다음! 다음!}.sample
    @who = %w{왼쪽 오른쪽 양쪽 건너편}.sample
    @penalty = %w{뽀뽀 러브샷 뺨맞기 허그백 허그}.sample
  
  # pick-games 조건문
    if @luck=="꽝!"
      puts @who = "모든", @penalty = "짠!"
      
    elsif @luck=="다음!"
      puts @who = "다음", @penalty = "패스!"
    end

  end

  def sub2
    # pub menu
  end
  
  def sub3
    # line-up
  end
  
  def sub4
    # gallery
  end
end
