# 

Source: https://proofwiki.org/wiki/Euler%27s_Formula/Real_Domain



Theorem
Let $\theta \in \R$ be a real number.
Then:

$e^{i \theta} = \cos \theta + i \sin \theta$

where:

$e^{i \theta}$ denotes the complex exponential function
$\cos \theta$ denotes the real cosine function
$\sin \theta$ denotes the real sine function
$i$ denotes the imaginary unit.


Corollary
$e^{-i \theta} = \cos \theta - i \sin \theta$


Proof 1
Consider the differential equation:

$D_z \map f z = i \cdot \map f z$


Step 1
We will prove that $z = \cos \theta + i \sin \theta$ is a solution.














\(\ds z\)

\(=\)







\(\ds \cos \theta + i \sin \theta\)




















\(\ds \frac {\d z} {\d \theta}\)

\(=\)







\(\ds -\sin \theta + i \cos \theta\)





Derivative of Sine Function, Derivative of Cosine Function, Linear Combination of Derivatives














\(\ds \)

\(=\)







\(\ds i^2 \sin \theta + i\cos \theta\)





$i^2 = -1$














\(\ds \)

\(=\)







\(\ds i \paren {i \sin \theta + \cos \theta}\)




















\(\ds \)

\(=\)







\(\ds i z\)









$\Box$


Step 2
We will prove that $y = e^{i\theta}$ is a solution.














\(\ds y\)

\(=\)







\(\ds e^{i\theta}\)




















\(\ds \frac {\d y} {\d \theta}\)

\(=\)







\(\ds i e^{i \theta}\)





Derivative of Exponential Function, Chain Rule for Derivatives, Linear Combination of Derivatives














\(\ds \)

\(=\)







\(\ds i y\)









$\Box$


Step 3
Consider the initial condition $\map f 0 = 1$.














\(\ds \bigvalueat y {\theta \mathop = 0}\)

\(=\)







\(\ds e^{0 i}\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \bigvalueat z {\theta \mathop = 0}\)

\(=\)







\(\ds \cos 0 + i \sin 0\)




















\(\ds \)

\(=\)







\(\ds 1\)









So $y$ and $z$ are both particular solutions.
But a particular solution to a differential equation is unique.


This article needs to be linked to other articles.In particular: "Specific solution" and the proof that such a specific solution is unique.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Therefore $y = z$, that is, $e^{i \theta} = \cos \theta + i \sin \theta$.
$\blacksquare$


Proof 2
This:

$e^{i \theta} = \cos \theta + i \sin \theta$
is logically equivalent to this:

$\dfrac {\cos \theta + i \sin \theta} {e^{i \theta} } = 1$
for every $\theta$.
Note that the left expression is nowhere undefined.

Taking the derivative of this:














\(\ds \dfrac \d {\d \theta} e^{-i \theta} \paren {\cos \theta + i \sin \theta}\)

\(=\)







\(\ds e^{-i \theta} \paren {-\sin \theta + i \cos \theta} + \paren {-i e^{-i \theta} } \paren {\cos \theta + i \sin \theta}\)





Product Rule for Derivatives and Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds e^{-i \theta} \paren {-\sin \theta + i \cos \theta - i \cos \theta - i^2 \sin \theta}\)




















\(\ds \)

\(=\)







\(\ds e^{-i \theta} \paren {-\sin \theta + i \cos \theta - i \cos \theta + \sin \theta}\)




















\(\ds \)

\(=\)







\(\ds e^{-i \theta} \paren 0\)




















\(\ds \)

\(=\)







\(\ds 0\)










Thus the expression, as a function of $\theta$, is constant and so yields the same value for every $\theta$.
We know the value at at least one point, that is, when $\theta = 0$:

$\dfrac {\cos 0 + i \sin 0} {e^{0 i}} = \dfrac {1 + 0} 1 = 1$
Thus it is $1$ for every $\theta$, which verifies the above.
Hence the result.
$\blacksquare$


Proof 3
It follows from Argument of Product equals Sum of Arguments that the $\map \arg z$ function for all $z \in \C$ satisfies the relationship:

$\map \arg {z_1 z_2} = \map \arg {z_1} + \map \arg {z_2}$
which means that $\map \arg z$ is a kind of logarithm, in the sense that it satisfies the fundamental property of logarithms:

$\log x y = \log x + \log y$
Notice that $\map \arg z$ can not be considered a generalization to complex values of the ordinary $\log$ function for real values, since for $x \in \R$, we have:

$0 = \map \arg x \ne \log x$
If we do wish to generalize the $\log$ function to complex values, we can use $\arg z$ to define a set of functions:

$\map {\operatorname{alog} } z = a \map \arg z + \log \cmod z$
for any $a \in \C$, where $\cmod z$ is the modulus of $z$.
All functions satisfy the fundamental property of logarithms and also coincide with the $\log$ function for all real values.
This is established in the following lemma.


Lemma 1
For all $a,z \in \C$, define the (complex valued) function $\operatorname{alog}$ as:

$\map {\operatorname{alog} } z = a \map \arg z + \log \cmod z$
then, for any $z_1, z_2 \in \C$ and $x \in \R$:

$\map {\operatorname{alog} } {z_1 z_2} = \map {\operatorname{alog} } {z_1} + \map {\operatorname{alog} } {z_2}$
and:

$\map {\operatorname{alog} } x = \log x$
This means that our (complex valued) $\operatorname{alog}$ functions can genuinely be considered generalizations of the (real valued) $\log$ function.


Proof of Lemma 1
Let $z_1, z_2$ be any two complex numbers, straightforward substitution on the definition of $\operatorname{alog}$ yields:














\(\ds \map {\operatorname{alog} } {z_1 z_2}\)

\(=\)







\(\ds a \map \arg {z_1 z_2} + \log \cmod {z_1 z_2}\)




















\(\ds \)

\(=\)







\(\ds a \paren {\map \arg {z_1} + \map \arg {z_1} } + \map \log {\cmod {z_1} \cmod {z_2} }\)




















\(\ds \)

\(=\)







\(\ds a \paren {\map \arg {z_1} + \map \arg {z_1} } + \log \cmod {z_1} + \log \cmod {z_2}\)




















\(\ds \)

\(=\)







\(\ds a \map \arg {z_1} + \log \cmod {z_1} + a \map \arg {z_2} + \log \cmod {z_2}\)




















\(\ds \)

\(=\)







\(\ds \map {\operatorname{alog} } {z_1} + \map {\operatorname{alog} } {z_1}\)










Second part of our lemma is even more straightforward since for $x \in \R$, we have:

$\map \arg x = 0$
Then:














\(\ds \map {\operatorname{alog} } x\)

\(=\)







\(\ds a \map \arg x + \log \cmod x\)




















\(\ds \)

\(=\)







\(\ds \log x\)









which concludes the proof of Lemma 1.
$\Box$

We're left  with an infinitude of possible generalizations of the $\log$ function, namely one for each choice of $a$ in our definition of $\operatorname{alog}$.
The following lemma proves that there's a value for $a$ that guarantees our definition of $\operatorname{alog}$ satisfies the much desirable property of $\log$:

$\dfrac{\d \log x} {\d x} = \dfrac 1 x$


Lemma 2
Let $\map {\operatorname{alog} } z = a \map \arg z + \log \cmod z$.
Then if:

$\dfrac {\map \d {\operatorname{alog} z} } {\d z} = \dfrac 1 z$
we must have:

$a = i$


Proof of Lemma 2
Let $z \in \C$ be such that:

$\cmod z = 1$
and:

$\map \arg z = \theta$

Then:

$z = \cos \theta + i \sin \theta$
Plugging those values in our definition of $\operatorname{alog}$:














\(\ds \map {\operatorname{alog} } z\)

\(=\)







\(\ds a \map \arg {\cos \theta + i \sin \theta} + \log \cmod z\)




















\(\ds \)

\(=\)







\(\ds a \theta + \log 1 = a \theta\)









We now have:

$a \theta = \map {\operatorname{alog} } {\cos \theta + i \sin \theta}$
Taking the derivative with respect to $\theta$ on both sides, we have:














\(\ds \map {\frac \d {\d \theta} } {a \theta}\)

\(=\)







\(\ds \map {\frac \d {\d \theta} } {\map {\operatorname{alog} } {\cos \theta + i \sin \theta} }\)




















\(\ds a\)

\(=\)







\(\ds \dfrac {\map \d {\cos \theta + i \sin \theta} } {\d \theta} \dfrac {\map \d {\map {\operatorname{alog} } {\cos \theta + i \sin \theta} } } {\map \d {\cos \theta + i \sin \theta} }\)





Chain Rule for Derivatives














\(\ds a\)

\(=\)







\(\ds \paren {-\sin \theta + i \cos \theta} \frac 1 {\cos \theta + i \sin \theta}\)





by hypothesis: $\dfrac {\map \d {\operatorname{alog} z} } {\d z} = \dfrac 1 z$



This last equation is true regardless of the value of $\theta$.
In particular, for $\theta = 0$, we must have:

$a = i$
which proves the lemma.
$\Box$

We now have established there is one function which truly deserves to be called the logarithm of complex numbers, defined as:

$\log z = i \map \arg z + \log \cmod z$
Since for any $z, z_1, z_2 \in \C, x \in \R$ it satisfies:

$\map \log {z_1 z_2} = \log z_1 + \log z_2$
$\log x = \log x$
$\dfrac {\map \d {\log z} } {\d z} = \dfrac 1 z$
Let its inverse function be referred to as the exponential of complex numbers, denoted as $e^z$.
If we write $z$ in its polar form:

$z = \cmod z \paren {\cos \theta + i \sin \theta}$
we have that:

$e^{i \theta + \log \cmod z} = \cmod z \paren {\cos \theta + i \sin \theta}$
Consider this equation for any number $z$ such that $\cmod z = 1$.
Then:

$e^{i \theta} = \cos \theta + i \sin \theta$
$\blacksquare$


Proof 4
Note that the following proof, as written, only holds for real $\theta$.
Define:

$\map x \theta = e^{i \theta}$
$\map y \theta = \cos \theta + i \sin \theta$
Consider first $\theta \ge 0$.
Taking Laplace transforms:














\(\ds \map {\laptrans {\map x \theta} } s\)

\(=\)







\(\ds \map {\laptrans {e^{i \theta} } } s\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {s - i}\)





Laplace Transform of Exponential














\(\ds \map {\laptrans {\map y \theta} } s\)

\(=\)







\(\ds \map {\laptrans {\cos \theta + i \sin \theta} } s\)




















\(\ds \)

\(=\)







\(\ds \map {\laptrans {\cos \theta} } s + i \, \map {\laptrans {\sin \theta} } s\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds \frac s {s^2 + 1} + \frac i {s^2 + 1}\)





Laplace Transform of Cosine, Laplace Transform of Sine














\(\ds \)

\(=\)







\(\ds \frac {s + i} {\paren {s + i} \paren {s - i} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {s - i}\)









So $x$ and $y$ have the same Laplace transform for $\theta \ge 0$.

Now define $\tau = -\theta, \sigma = -s$, and consider $\theta < 0$ so that $\tau > 0$.
Taking Laplace transforms of $\map x \tau$ and $\map y \tau$: 














\(\ds \map {\laptrans {\map x \tau} } \sigma\)

\(=\)







\(\ds \frac 1 {\sigma - i}\)





from above














\(\ds \map {\laptrans {\map y \tau} } \sigma\)

\(=\)







\(\ds \frac 1 {\sigma - i}\)





from above



So $\map x \theta$ and $\map y \theta$ have the same Laplace transforms for $\theta < 0$.
The result follows from Injectivity of Laplace Transform.
$\blacksquare$


Proof 5
As Sine Function is Absolutely Convergent and Cosine Function is Absolutely Convergent, we have:














\(\ds \cos \theta + i \sin \theta\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \dfrac {\theta^{2 n} } {\paren {2 n}!} + i \sum_{n \mathop = 0}^\infty \paren {-1}^n \dfrac {\theta^{2 n + 1} } {\paren {2 n + 1}!}\)





Definition of Complex Cosine Function and Definition of Complex Sine Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\paren {-1}^n \dfrac {\theta^{2 n} } {\paren {2 n}!} + i \paren {-1}^n \dfrac {\theta^{2 n + 1} } {\paren {2 n + 1}!} }\)





Sum of Absolutely Convergent Series














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\dfrac {\paren {i \theta}^{2 n} } {\paren {2 n}!} + \dfrac {\paren {i \theta}^{2 n + 1} } {\paren {2 n + 1}!} }\)





Definition of Imaginary Unit














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac {\paren {i \theta}^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds e^{i \theta}\)





Definition of Complex Exponential Function



$\blacksquare$


Proof 6













\(\ds \int \frac {\d x} {\sqrt {x^2 + 1} }\)

\(=\)







\(\ds \map \ln {\sqrt {x^2 + 1} + x }\)





Primitive of Reciprocal of Root of x squared plus a squared/Logarithm Form and $a = 1$














\(\ds \int \frac {i\cos \theta \rd \theta } {\sqrt {1 - \sin^2 \theta} }\)

\(=\)







\(\ds \map \ln {\sqrt {1 - \sin^2 \theta} + i \sin \theta }\)





$x = i \sin \theta$; $\d x = i\cos \theta \rd \theta$














\(\ds \int \frac {i\cos \theta \rd \theta } {\sqrt {\cos^2 \theta} }\)

\(=\)







\(\ds \map \ln {\sqrt {\cos^2 \theta} + i \sin \theta }\)





Sum of Squares of Sine and Cosine














\(\ds i\int \rd \theta\)

\(=\)







\(\ds \map \ln {\cos \theta + i \sin \theta }\)




















\(\ds i \theta\)

\(=\)







\(\ds \map \ln {\cos \theta + i \sin \theta }\)




















\(\ds e^{i \theta}\)

\(=\)







\(\ds \cos \theta + i \sin \theta\)










$\blacksquare$


Examples
Example: $e^{i \pi / 4}$
$e^{i \pi / 4} = \dfrac {1 + i} {\sqrt 2}$


Example: $e^{i \pi / 2}$
$e^{i \pi / 2} = i$


Example: $e^{-i \pi / 2}$
$e^{-i \pi / 2} = -i$


Example: $e^{i \pi}$
$e^{i \pi} = -1$


Example: $e^{2 i \pi}$
$e^{2 i \pi} = 1$


Example: $e^{2 k i \pi}$
$\forall k \in \Z: e^{2 k i \pi} = 1$


Also known as
Euler's Formula in this and its corollary form, along with Euler's Sine Identity and Euler's Cosine Identity are also found referred to as Euler's Identities.
However, this allows for confusion with Euler's Identity:

$e^{i \pi} + 1 = 0$
It is wise when referring to it by name, therefore, to ensure that the equation itself is also specified.


Also see
Euler's Identity


Source of Name
This entry was named for Leonhard Paul Euler.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 7$: Relationship between Exponential and Trigonometric Functions: $7.16$
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.17$: The Homogeneous Equation with Constant Coefficients
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3$: Appendix $\text A$: Euler
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $2 \cdotp 718 \, 281 \, 828 \, 459 \, 045 \, 235 \, 360 \, 287 \, 471 \, 352 \, 662 \, 497 \, 757 \, 247 \, 093 \, 699 \ldots$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.21$: Euler ($\text {1707}$ – $\text {1783}$)
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $2 \cdotp 71828 \, 18284 \, 59045 \, 23536 \, 02874 \, 71352 \, 66249 \, 77572 \, 47093 \, 69995 \ \ldots$




