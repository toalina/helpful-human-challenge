$(document).ready(function(){$("input").focus(function(){$(this).addClass("active")}),$("input").blur(function(){$(this).removeClass("active")}),$("textarea").focus(function(){$(this).addClass("active")}),$("textarea").blur(function(){$(this).removeClass("active")}),$(".breadcrumbs li").hover(function(){$(this).toggleClass("active-crumb")})});