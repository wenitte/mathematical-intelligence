# 

Source: https://proofwiki.org/wiki/Method_of_Undetermined_Coefficients



Proof Technique
The Method of Undetermined Coefficients is a technique for solving a nonhomogeneous linear second order ODE with constant coefficients:

$(1): \quad y' ' + p y' + q y = \map R x$
where $\map R x$ is one of the following types of expression:

an exponential
a sine or a cosine
a polynomial
or a combination of such real functions.


Method and Proof
Let $\map {y_g} x$ be the general solution to:

$y' ' + p y' + q y = 0$
From Solution of Constant Coefficient Homogeneous LSOODE, $\map {y_g} x$ can be found systematically.
Let $\map {y_p} x$ be a particular solution to $(1)$.
Then from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$\map {y_g} x + \map {y_p} x$
is the general solution to $(1)$.

It remains to find $\map {y_p} x$.


Exponential Function
Let $\map R x = K e^{a x}$.

Consider the auxiliary equation to $(1)$:

$(2): \quad m^2 + p m + q = 0$

There are three cases to consider.


$a$ is not a root of $(2)$
Assume that there is a particular solution to $(1)$ of the form:

$y_p = A e^{a x}$
We have:














\(\ds \frac {\d} {\d x} y_p\)

\(=\)







\(\ds a A e^{a x}\)





Derivative of Exponential Function














\(\ds \frac {\d^2} {\d x^2} y_p\)

\(=\)







\(\ds a^2 A e^{a x}\)





Derivative of Exponential Function



Inserting into $(1)$:














\(\ds a^2 A e^{a x} + a p A e^{a x} + q A e^{a x}\)

\(=\)







\(\ds K e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds A \left({a^2 + p a + q}\right) e^{a x}\)

\(=\)







\(\ds K e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac K {a^2 + p a + q}\)









Hence:

$y_p = \dfrac {K e^{a x} } {a^2 + p a + q}$

From Solution of Constant Coefficient Homogeneous LSOODE, $y_g$ depends on whether $(2)$ has equal or unequal roots.
Let $m_1$ and $m_2$ be the roots of $(2)$.
Then:

$y = \begin{cases} C_1 e^{m_1 x} + C_2 e^{m_2 x} + \dfrac {K e^{a x} } {a^2 + p a + q} & : m_1 \ne m_2: m_1, m_2 \in \R \\ C_1 e^{m_1 x} + C_2 x e^{m_1 x} + \dfrac {K e^{a x} } {a^2 + p a + q} & : m_1 = m_2 \\ e^{r x} \paren {C_1 \cos s x + C_2 \sin s x} + \dfrac {K e^{a x} } {a^2 + p a + q} & : m_1 = r + i s, m_2 = r - i s \end{cases}$
is the general solution to $(1)$.
$\Box$


$a$ is a root of $(2)$
If $a$ is a root of $(2)$, then $a^2 + p a + q = 0$ and so $\dfrac {K e^{a x} } {a^2 + p a + q}$ is undefined.

Let the auxiliary equation to $(2)$ have two unequal real roots $a$ and $b$.

Assume that there is a particular solution to $(1)$ of the form:

$y_p = A x e^{a x}$
We have:














\(\ds \frac {\d} {\d x} y_p\)

\(=\)







\(\ds a A x e^{a x} + A e^{a x}\)





Product Rule for Derivatives and Derivative of Exponential Function














\(\ds \frac {\d^2} {\d x^2} y_p\)

\(=\)







\(\ds a^2 A x e^{a x} + a A e^{a x} + a A e^{a x}\)





Product Rule for Derivatives and Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds a^2 A x e^{a x} + 2 a A e^{a x}\)









Inserting into $(1)$:














\(\ds a^2 A x e^{a x} + 2 a A e^{a x} + p \paren {a A x e^{a x} + A e^{a x} } + q A x e^{a x}\)

\(=\)







\(\ds K e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds A \paren {a^2 + p a + q} x e^{a x} + A \paren {2 a + p} e^{a x}\)

\(=\)







\(\ds K e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds A \paren {2 a + p} e^{a x}\)

\(=\)







\(\ds K e^{a x}\)





as $a^2 + p a + q = 0$








\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac K {2 a + p}\)









Hence:

$y_p = \dfrac {K x e^{a x} } {2 a + p}$
and so from Solution of Constant Coefficient Homogeneous LSOODE:

$y = C_1 e^{a x} + C_2 e^{b x} + \dfrac {K x e^{a x} } {2 a + p}$
is the general solution to $(1)$.
$\Box$


$a$ is a repeated root of $(2)$
If the auxiliary equation to $(2)$ has two equal real roots $a$, then:

$a = - \dfrac p 2$
and so not only:

$a^2 + p a + q = 0$
but also:

$2 a + p = 0$
and so neither of the above expressions involving $e^{a x}$ and $x e^{a x}$ will work as particular solution to $(1)$.

So, assume that there is a particular solution to $(1)$ of the form:

$y_p = A x^2 e^{a x}$
We have:














\(\ds \frac {\d} {\d x} y_p\)

\(=\)







\(\ds a A x^2 e^{a x} + 2 A x e^{a x}\)





Product Rule for Derivatives and Derivative of Exponential Function














\(\ds \frac {\d^2} {\d x^2} y_p\)

\(=\)







\(\ds a^2 A x^2 e^{a x} + 2 a x A e^{a x} + 2 a x A e^{a x} + 2 A e^{a x}\)





Product Rule for Derivatives and Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds a^2 A x e^{a x} + 4 a x A e^{a x} + 2 A e^{a x}\)





Derivative of Exponential Function



Inserting into $(1)$:














\(\ds a^2 A x e^{a x} + 4 a x A e^{a x} + 2 A e^{a x} + p \paren {a A x^2 e^{a x} + 2 A x e^{a x} } + q A x^2 e^{a x}\)

\(=\)







\(\ds K e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds A \paren {a^2 + p a + q} x e^{a x} + 2 A \paren {2 a + p} x e^{a x} + 2 A e^{a x}\)

\(=\)







\(\ds K e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds 2 A e^{a x}\)

\(=\)







\(\ds K e^{a x}\)





as $a^2 + p a + q = 0$ and $2 a + p = 0$








\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac K 2\)









Hence:

$y_p = \dfrac {K x^2 e^{a x} } 2$
and so:

$y = y_g + \dfrac {K x^2 e^{a x} } 2$
and so from Solution of Constant Coefficient Homogeneous LSOODE:

$y = C_1 e^{a x} + C_2 x e^{a x} + \dfrac {K x^2 e^{a x} } 2$
is the general solution to $(1)$.
$\Box$


Sine and Cosine Functions
Let $\map R x = \alpha \sin b x + \beta \cos b x$.

Consider the auxiliary equation to $(1)$:

$(2): \quad m^2 + p m + q = 0$

There are two cases which may apply.


$i b$ is not Root of Auxiliary Equation
First we investigate the case where $i b$ is not a root of the auxiliary equation to $(1)$.


Trigonometric Form
Assume that there is a particular solution to $(1)$ of the form:

$y_p = A \sin b x + B \cos b x$
We have:














\(\ds \frac {\d} {\d x} y_p\)

\(=\)







\(\ds b A \cos b x - b B \sin b x\)





Derivative of Sine Function, Derivative of Cosine Function














\(\ds \frac {\d^2} {\d x^2} y_p\)

\(=\)







\(\ds -b^2 A \sin b x - b^2 B \cos b x\)





Derivative of Sine Function, Derivative of Cosine Function



Inserting into $(1)$:














\(\ds -b^2 \paren {A \sin b x + B \cos b x} + b p \paren {A \cos b x - B \sin b x} + q \paren {A \sin b x + B \cos b x}\)

\(=\)







\(\ds \alpha \sin b x + \beta \cos b x\)














\(\ds \leadsto \ \ \)





\(\ds \paren {-A b^2 - B b p + A q} \sin b x + \paren {-B b^2 + A b p + B q} \cos b x\)

\(=\)







\(\ds \alpha \sin b x + \beta \cos b x\)









Hence $A$ and $B$ can be expressed in terms of $\alpha$ and $\beta$:








\(\ds \leadsto \ \ \)





\(\ds -A b^2 - B b p + A q\)

\(=\)







\(\ds \alpha\)




















\(\ds -B b^2 + A b p + B q\)

\(=\)







\(\ds \beta\)














\(\ds \leadsto \ \ \)





\(\ds A \paren {q - b^2}\)

\(=\)







\(\ds \alpha + B b p\)




















\(\ds B \paren {q - b^2}\)

\(=\)







\(\ds \beta - A b p\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac {\alpha + B b p} {q - b^2}\)














\(\ds \leadsto \ \ \)





\(\ds B \paren {q - b^2}\)

\(=\)







\(\ds \beta - \frac {\alpha + B b p} {q - b^2} b p\)














\(\ds \leadsto \ \ \)





\(\ds B \paren {q - b^2}^2\)

\(=\)







\(\ds \beta \paren {q - b^2} - \paren {\alpha + B b p} b p\)




















\(\ds \)

\(=\)







\(\ds \beta \paren {q - b^2} - \alpha b p - B b^2 p^2\)














\(\ds \leadsto \ \ \)





\(\ds B \paren {\paren {q - b^2}^2 + b^2 p^2}\)

\(=\)







\(\ds \beta \paren {q - b^2} - \alpha b p\)














\(\ds \leadsto \ \ \)





\(\ds B\)

\(=\)







\(\ds \frac {\beta \paren {q - b^2} - \alpha b p} {\paren {q - b^2}^2 + b^2 p^2}\)














\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac {\alpha \paren {q - b^2} + \beta b p} {\paren {q - b^2}^2 + b^2 p^2}\)





similarly




Hence:

$y_p = \dfrac {\alpha \paren {q - b^2} + \beta b p} {\paren {q - b^2}^2 + b^2 p^2} \sin b x + \dfrac {\beta \paren {q - b^2} - \alpha b p} {\paren {q - b^2}^2 + b^2 b^2} \cos b x$
$\Box$


Exponential Form
Assume that there is a particular solution to $(1)$ of the form:

$y_p = A \sin b x + B \cos b x$
From Euler's Formula:

$\cos b x + i \sin b x = e^{i b x}$
and so:

$A \sin b x + B \cos b x$ is the real part of $\paren {A - i B} \paren {\cos b x + i \sin b x} = \paren {A - i B} e^{i b x}$
It is assumed that $A$, $B$, $p$ and $q$ are all real numbers.

Suppose we have found a solution $y$ of $(1)$ where:

$\map f x = \map {f_1} x + i \, \map {f_2} x$
where $\map y x$ and $\map f x$ are complex-valued.
Letting $\map y x = \map {y_1} x + \map {y_2} x$, where $y_1$ and $y_2$ are the real and imaginary parts of $\map y x$, we have:

${y_1}' ' + p {y_1}' + q y_1 + i \paren { {y_2}' ' + p {y_2}' + q y_2} = \map {f_1} x + i \, \map {f_2} x$
Equating real parts:

${y_1}' ' + p {y_1}' + q y_1 = \map {f_1} x$
Equating imaginary parts:

${y_2}' ' + p {y_2}' + q y_2 = \map {f_2} x$

Thus if $y$ is a particular solution to $(1)$ when the right hand side is $\map f x$:

$\map \Re y$ is a particular solution to $(1)$ when the right hand side is $\map \Re {\map f x}$
$\map \Im y$ is a particular solution to $(1)$ when the right hand side is $\map \Im {\map f x}$
So to find a particular solution when the right hand side is $K \cos x$ or $K \sin x$, we can first find a particular solution when the right hand side is $K e^{i b x}$ and then take its real part or imaginary part as necessary.

Hence, when we have $A \cos b x + B \sin b x$ on the right hand side:

replace it with $\paren {A - i B} e^{i b x}$
use the Method of Undetermined Coefficients for Exponential functions
and then take its real part.


$i b$ is Root of Auxiliary Equation
Now suppose that $(1)$ is of the form $y' ' + b^2 y = A \sin b x + B \cos b x$.

Thus one of the $i b$ is one of the roots of the auxiliary equation to $(1)$.
From Linear Second Order ODE: $y + k^2 y = 0$ the general solution to $(2)$ is:

$y = C_1 \sin b x + C_2 \cos b x$
and it can be seen that an expression of the form $A \sin b x + B \cos b x$ is already a particular solution of $(2)$.

Thus we have:

$\paren {q - b^2}^2 + b^2 p^2 = 0$.
But using the Method of Undetermined Coefficients in the above manner, this would result in an attempt to calculate:

$\dfrac {\alpha \paren {q - b^2} + \beta b p} {\paren {q - b^2}^2 + b^2 p^2}$
and:

$\dfrac {\beta \paren {q - b^2} - \alpha b p} {\paren {q - b^2}^2 + b^2 p^2}$
both of which are are undefined.


Trigonometric Form
Assume that there is a particular solution to $(1)$ of the form:

$y_p = x \paren {A \sin b x + B \cos b x}$
We have:














\(\ds \frac {\d} {\d x} y_p\)

\(=\)







\(\ds x \paren {b A \cos b x - b B \sin b x} + \paren {A \sin b x + B \cos b x}\)





Derivative of Sine Function, Derivative of Cosine Function, Product Rule for Derivatives














\(\ds \frac {\d^2} {\d x^2} y_p\)

\(=\)







\(\ds x \paren {-b^2 A \sin b x - b^2 B \cos b x} + \paren {b A \cos b x - b B \sin b x} + \paren {b A \cos b x - b B \sin b x}\)





Derivative of Sine Function, Derivative of Cosine Function, Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds x \paren {-b^2 A \sin b x - b^2 B \cos b x} + 2 \paren {b A \cos b x - b B \sin b x}\)










Inserting into $(1)$:














\(\ds x \paren {-b^2 A \sin b x - b^2 B \cos b x} + 2 \paren {b A \cos b x - b B \sin b x} + b^2 x \paren {A \sin b x + B \cos b x}\)

\(=\)







\(\ds \alpha \sin b x + \beta \cos b x\)














\(\ds \leadsto \ \ \)





\(\ds 2 \paren {b A \cos b x - b B \sin b x}\)

\(=\)







\(\ds \alpha \sin b x + \beta \cos b x\)














\(\ds \leadsto \ \ \)





\(\ds 2 b A \cos b x\)

\(=\)







\(\ds \beta \cos b x\)














\(\ds \leadsto \ \ \)





\(\ds -2 b B \sin b x\)

\(=\)







\(\ds \alpha \sin b x\)














\(\ds \leadsto \ \ \)





\(\ds 2 b A\)

\(=\)







\(\ds \beta\)














\(\ds \leadsto \ \ \)





\(\ds -2 b B\)

\(=\)







\(\ds \alpha\)










Hence $A$ and $B$ can be expressed in terms of $\alpha$ and $\beta$:








\(\ds \leadsto \ \ \)





\(\ds A\)

\(=\)







\(\ds \frac \beta {2 b}\)




















\(\ds B\)

\(=\)







\(\ds -\frac \alpha {2 b}\)










Hence:

$y_p = \dfrac {\beta x \sin b x} {2 b} - \dfrac {\alpha x \cos b x} {2 b}$


Exponential Form
Assume that there is a particular solution to $(1)$ of the form:

$y_p = x \paren {A \sin b x + B \cos b x}$
From Euler's Formula:

$\cos b x + i \sin b x = e^{i b x}$
and so:

$x \paren {A \sin b x + B \cos b x}$ is the real part of $x \paren {A - i B} \paren {\cos b x + i \sin b x} = x \paren {A - i B} e^{i b x}$
It is assumed that $A$, $B$, $p$ and $q$ are all real numbers.

Suppose we have found a solution $y$ of $(1)$ where:

$\map f x = \map {f_1} x + i \, \map {f_2} x$
where $\map y x$ and $\map f x$ are complex-valued.
Letting $\map y x = \map {y_1} x + \map {y_2} x$, where $y_1$ and $y_2$ are the real and imaginary parts of $\map y x$, we have:

${y_1}' ' + p {y_1}' + q y_1 + i \paren { {y_2}' ' + p {y_2}' + q y_2} = \map {f_1} x + i \, \map {f_2} x$
Equating real parts:

${y_1}' ' + p {y_1}' + q y_1 = \map {f_1} x$
Equating imaginary parts:

${y_2}' ' + p {y_2}' + q y_2 = \map {f_2} x$

Thus if $y$ is a particular solution to $(1)$ when the right hand side is $\map f x$:

$\map \Re y$ is a particular solution to $(1)$ when the right hand side is $\map \Re {\map f x}$
$\map \Im y$ is a particular solution to $(1)$ when the right hand side is $\map \Im {\map f x}$
So to find a particular solution when the right hand side is $K \cos x$ or $K \sin x$, we can first find a particular solution when the right hand side is $K e^{i b x}$ and then take its real part or imaginary part as necessary.

Hence, when we have $A \cos b x + B \sin b x$ on the right hand side:

replace it with $x \paren {A - i B} e^{i b x}$
use the Method of Undetermined Coefficients for Exponential functions
and then take its real part.
$\Box$


Exponential of Sine and Cosine Functions
Substitute a trial solution of similar form, either:

$e^{a x} \paren {A \sin b x + B \cos b x}$
or replace the right hand side of $(1)$ by:

$\paren {\alpha - i \beta} e^{i \paren {a + i b} x}$
find a solution, and take the real part.

If $e^{a x} \sin b x$ and $e^{a x} \cos b x$ appear in the general solution to $(2)$, then insert a factor of $x$:

$x e^{a x} \paren {A \sin b x + B \cos b x}$
or:

$x \paren {\alpha - i \beta} e^{i \paren {a + i b} x}$
$\Box$


Polynomial Function
Let $\ds \map R x = \sum_{j \mathop = 0}^n a_j x^j$.

Assume that there is a particular solution to $(1)$ of the form:

$\ds y_p = \sum_{j \mathop = 0}^n A_j x^j$
We have:














\(\ds \frac {\d} {\d x} y_p\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n j A_j x^{j - 1}\)





Power Rule for Derivatives














\(\ds \frac {\d^2} {\d x^2} y_p\)

\(=\)







\(\ds \sum_{j \mathop = 2}^n j \paren {j - 1} A_j x^{j - 2}\)





Power Rule for Derivatives




Inserting into $(1)$:














\(\ds \sum_{j \mathop = 2}^n j \paren {j - 1} A_j x^{j - 2} + p \sum_{j \mathop = 1}^n j A_j x^{j - 1} + q \sum_{j \mathop = 0}^n A_j x^j\)

\(=\)







\(\ds \sum_{j \mathop = 0}^n a_j x^j\)









The coefficients $A_0$ to $A_n$ can hence be solved in terms of $a_0$ to $a_n$ using the techniques of simultaneous equations.
The general form is tedious and unenlightening to evaluate.
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 2$. The second order equation: $\S 2.2$ The general equation
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.18$: The Method of Undetermined Coefficients
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): linear differential equation with constant coefficients




