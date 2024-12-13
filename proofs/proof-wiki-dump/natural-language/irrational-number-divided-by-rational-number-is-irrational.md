# 

Source: https://proofwiki.org/wiki/Irrational_Number_divided_by_Rational_Number_is_Irrational

Theorem
Let $x$ be a irrational number. 
Let $y$ be a non-zero rational number.

Then: 

$\dfrac x y$
is irrational.


Proof
Aiming for a contradiction, suppose $\dfrac x y$ is rational number.
Then there exists an integer $p_1$ and a natural number $q_1$ such that: 

$\dfrac x y = \dfrac {p_1} {q_1}$
That is: 

$x = \dfrac {p_1} {q_1} y$
From the fact that $y$ is rational, we similarly have that there exists an integer $p_2$ and a natural number $q_2$ such that:

$y = \dfrac {p_2} {q_2}$
Then: 

$x = \dfrac {p_1 p_2} {q_1 q_2}$
From Integer Multiplication is Closed, we have that $p_1 p_2$ is an integer. 
From Natural Number Multiplication is Closed, we have that $q_1 q_2$ is a natural number.
Let $p_3 = p_1 p_2$ and $q_3 = q_1 q_2$.
Then $x$ is expressible in the form: 

$x = \dfrac {p_3} {q_3}$
where $p_3$ is an integer and $q_3$ is a natural number.
This, however, implies that $x$ is rational, which is a contradiction.
By Proof by Contradiction, we conclude that $\dfrac x y$ is irrational.
$\blacksquare$





