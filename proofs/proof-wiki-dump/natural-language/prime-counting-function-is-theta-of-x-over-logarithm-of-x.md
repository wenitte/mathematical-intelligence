# 

Source: https://proofwiki.org/wiki/Prime-Counting_Function_is_Theta_of_x_over_Logarithm_of_x

Theorem
We have: 

$\map \pi x = \map \Theta {\dfrac x {\ln x} }$
where:

$\Theta$ is $\Theta$ notation
$\pi$ is the prime counting function.


Proof
From Second Chebyshev Function is $\map \Theta x$, there exists real numbers $A, B, x_0 > 0$ such that: 

$A x \le \map \psi x \le B x$
for $x \ge x_0$, where $\psi$ is the second Chebyshev function.
From Bounds for Prime-Counting Function in terms of Second Chebyshev Function, there exists a real function $R : \hointr 2 \infty \to \R$ such that: 

$\dfrac {\map \psi x} {\ln x} + \map R x \le \map \pi x \le \dfrac {2 \map \psi x} {\ln x} + \sqrt x$
for all real numbers $x \ge 2$, with: 

$R = \map \OO {\sqrt x \ln x}$
We aim to combine these inequalities to first obtain: 

$\map \pi x \le \dfrac {C_2 x} {\ln x}$
for sufficiently large $x$ and a real number $C_2 > 0$, so we would obtain: 

$\map \pi x = \map \OO {\dfrac x {\ln x} }$
We will also aim to obtain: 

$\dfrac {C_1 x} {\ln x} \le \map \pi x$
for sufficiently large $x$ and a real number $C_1 > 0$, so we obtain: 

$\dfrac x {\ln x} \le \frac 1 {C_1} \map \pi x$
giving: 

$\dfrac x {\ln x} = \map \OO {\map \pi x}$
At which point we have: 

$\map \pi x = \map \Theta {\dfrac x {\ln x} }$
which is the demand.

We have, for $x \ge \max \set {x_0, 2}$: 

$\dfrac {2 \map \psi x} {\ln x} + \sqrt x \le \dfrac {2 B x} {\ln x} + \sqrt x$
From Order of Natural Logarithm Function, for $x \ge 1$ we have: 

$\ln x \le 2 \sqrt x$
So that: 

$\sqrt x \le \dfrac {2 x} {\ln x}$
So we obtain, for $x \ge \max \set {x_0, 2}$: 

$\dfrac {2 \map \psi x} {\ln x} + \sqrt x \le \dfrac {\paren {2 B + 2} x} {\ln x}$
Let:

$M_1 = \max \set {x_0, 2}$
Then, we have:

$\map \pi x \le \dfrac {\paren {2 B + 2} x} {\ln x}$
for $x \ge M_1$. 
Setting $C_2 = 2 B + 2 > 0$, we have: 

$\map \pi x \le \dfrac {C_2 x} {\ln x}$
for $x \ge M_1$. 

Now we aim to find a real number $C_1 > 0$ such that: 

$\dfrac {C_1 x} {\ln x} \le \map \pi x$
Since, for $x \ge 2$:

$\dfrac {\map \psi x} {\ln x} + \map R x \le \map \pi x$
with $R = \map \OO {\sqrt x \ln x}$, there exists real numbers $C, x_1 > 0$ such that: 

$\size {\map R x} \le C \sqrt x \ln x$
for $x \ge x_1 \ge 2$.
That is: 

$-C \sqrt x \ln x \le \map R x$
for $x \ge x_1$.
So, we have: 

$\dfrac {\map \psi x} {\ln x} + \map R x \ge \dfrac {A x} {\ln x} - C \sqrt x \ln x$
for $x \ge \max \set {x_0, x_1}$.
We can show that we have: 

$\dfrac {A x} {\ln x} - C \sqrt x \ln x \ge \dfrac {A x} {2 \ln x}$
for sufficiently large $x$. 
Note that this inequality is equivalent to: 

$\dfrac {A x} {2 \ln x} \ge C \sqrt x \ln x$
That is: 

$\dfrac {\sqrt x} {\paren {\ln x}^2} \ge \dfrac {2 C} A$
From Order of Natural Logarithm Function, we have: 

$\ln x \le 8 x^{1/8}$
for $x \ge 1$. 
That is: 

$\dfrac {\sqrt x} {\paren {\ln x}^2} \ge \dfrac {\sqrt x} {\paren {8 x^{1/8} }^2} = \dfrac 1 {64} x^{1/4}$
So it suffices to take: 

$\dfrac 1 {64} x^{1/4} \ge \dfrac {2 C} A$
Setting: 

$M_2 = \max \set {x_0, x_1, \paren {\dfrac {128 C} A}^4}$
we have: 

$\dfrac {\map \psi x} {\ln x} + \map R x \ge \dfrac {A x} {2 \ln x}$
for $x \ge M_2$. 
That is: 

$\map \pi x \ge \dfrac {A x} {2 \ln x}$
So, taking:

$C_1 = \dfrac A 2 > 0$
We have: 

$\map \pi x \ge d\frac {C_1 x} {\ln x}$
for $x \ge M_2$. 

Let: 

$M = \max \set {M_1, M_2}$
Then, for $x \ge M$, we have: 

$\dfrac {C_1 x} {\ln x} \le \map \pi x \le \dfrac {C_2 x} {\ln x}$
with $C_1, C_2 > 0$, so: 

$\map \pi x = \map \Theta {\dfrac x {\ln x} }$
as required.
$\blacksquare$


Notes

This page has been identified as a candidate for refactoring of medium complexity.In particular: Recommended this section be tightened up -- it does not read easily. Might be best writing this section as an Also see and extract the gist into separate pages.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
This result is a weak counterpart to the Prime Number Theorem. 
While the Prime Number Theorem states that for any $\epsilon > 0$, we have: 

$\paren {1 - \epsilon} \dfrac x {\ln x} \le \map \pi x \le \paren {1 + \epsilon} \dfrac x {\ln x}$
for sufficiently large $x$, this result only guarantees the existence of some constants $c_1, c_2 > 0$ such that: 

$c_1 \dfrac x {\ln x} \le \map \pi x \le c_2 \dfrac x {\ln x}$
for sufficiently large $x$. (and hence for all $x \ge 2$)


This article, or a section of it, needs explaining.In particular: How does "sufficiently large $x$" lead on to the statement "and hence for all $x \ge 2$"?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Indeed, it alone does not guarantee the existence of the limit: 

$\ds \lim_{x \mathop \to \infty} \frac {\map \pi x} {x / \ln x}$




