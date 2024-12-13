# 

Source: https://proofwiki.org/wiki/Picard%27s_Existence_Theorem/Proof_1



Theorem
Let $\map f {x, y} : \R^2 \to \R$ be continuous in a region $D \subseteq \R^2$.
Let $\exists M \in \R: \forall x, y \in D: \size {\map f {x, y} } < M$.
Let $\map f {x, y}$ satisfy in $D$ the Lipschitz condition in $y$:

$\size{\map f {x, y_1} - \map f {x, y_2} } \le A \size {y_1 - y_2}$
where $A$ is independent of $x, y_1, y_2$.

Let the rectangle $R$ be defined as $\set {\tuple {x, y} \in \R^2: \size {x - a} \le h, \size {y - b} \le k}$ such that $M h \le k$.
Let $R \subseteq D$.

Then $\forall x \in \R: \size {x - a} \le h$, the first order ordinary differential equation:

$y' = \map f {x, y}$
has one and only one solution $y = \map y x$ for which $b = \map y a$.


Proof
Let us define the following series of functions:














\(\ds \map {y_0} x\)

\(=\)







\(\ds b\)




















\(\ds \map {y_1} x\)

\(=\)







\(\ds b + \int_a^x \map f {t, \map {y_0} t} \rd t\)




















\(\ds \map {y_2} x\)

\(=\)







\(\ds b + \int_a^x \map f {t, \map {y_1} t} \rd t\)




















\(\ds \)

\(\ldots\)







\(\ds \)




















\(\ds \map {y_n} x\)

\(=\)







\(\ds b + \int_a^x \map f {t, \map {y_{n - 1} } t} \rd t\)









What we are going to do is prove that $\ds \map y x = \lim_{n \mathop \to \infty} \map {y_n} t$ is the required solution.
There are five main steps, as follows:


The curve lies in the rectangle
We will show that for $a - h \le x \le a + h$, the curve $y = \map {y_n} x$ lies in the rectangle $R$.
That is, that $b - k < y < b + k$.
Suppose $y = \map {y_{n - 1} } x$ lies in $R$.
Then:














\(\ds \size {\map {y_n} x - b}\)

\(=\)







\(\ds \size {\int_a^x \map f {t, \map {y_{n - 1} } t} \rd t}\)




















\(\ds \)

\(\le\)







\(\ds M \size {x - a}\)




















\(\ds \)

\(\le\)







\(\ds M h\)




















\(\ds \)

\(<\)







\(\ds k\)









Clearly $y_0$ lies in $R$, and the argument holds for $y_1$.
So by induction, $y = \map {y_n} x$ lies in $R$ for all $n \in \N$.


Bounded Nature of Adjacent Differences
We will show that:

$\ds \size {\map {y_n} x - \map {y_{n - 1} } x} \le \frac {M A^{n - 1} } {n!} \size {x - a}^n$
This is also to be proved by induction.
Suppose that this holds for $n-1$ in place of $n$.
Let this be the induction hypothesis.
We have:

$\ds \map {y_n} x - \map {y_{n - 1} } x = \int_a^x \paren {\map f {t, \map {y_{n - 1} } t} - \map f {t, \map {y_{n - 2} } t} } \rd t$
We also have that:

$\size {\map f {t, \map {y_{n - 1} } t} - \map f {t, \map {y_{n - 2} } t} } \le A \size {\map {y_{n - 1} } t - \map {y_{n - 2} } t}$
by the Lipschitz condition.
By the induction hypothesis, it follows that:
$\ds \size {\map f {t, \map {y_{n - 1} } t} - \map f {t, \map {y_{n - 2} } t} } \le \frac {M A^{n - 1} \size {t - a}^{n - 1} } {\paren {n - 1}!}$
So:














\(\ds \size {\map {y_n} x - \map {y_{n - 1} } x}\)

\(\le\)







\(\ds \frac {M A^{n - 1} } {\paren {n - 1}!} \size {\int_a^x \size {t - a}^{n - 1} \rd t}\)




















\(\ds \)

\(=\)







\(\ds \frac {M A^{n - 1} } {n!} \size {x - a}^n\)









For the base case, we use $n = 1$:

$\ds \size {\map {y_1} x - b} \le \size {\int_a^x \map f {t, b} \rd t} \le M \size {x - a}$
Thus by induction:

$\ds \size {\map {y_n} x - \map {y_{n - 1} } x} \le \frac {M A^{n - 1} } {n!} \size {x - a}^n$
for all $n$.


Uniform Convergence of Sequence
Next we show that the sequence $\sequence {\map {y_n} x}$ converges uniformly to a limit for $a - h \le x \le a + h$.
From Bounded Nature of Adjacent Differences above, we have:














\(\ds \)

\(\)







\(\ds b + \paren {\map {y_1} x - b} + \cdots + \paren {\map {y_n} x - \map {y_{n - 1} } x} + \cdots\)




















\(\ds \)

\(\le\)







\(\ds b + M h + \cdots + \frac {M A^{n - 1} h^n} {n!} + \cdots\)









From Radius of Convergence of Power Series over Factorial, it follows that $b + M h + \cdots + \dfrac {M A^{n - 1} h^n} {n!} + \cdots$ is absolutely convergent for all $h$.
Hence, by the Weierstrass M-Test:

$b + \paren {\map {y_1} x - b} + \cdots + \paren {\map {y_n} x - \map {y_{n - 1} } x} + \cdots$
converges uniformly for $a - h \le x \le a + h$.
Since its terms are continuous functions of $x$, its sum $\ds \lim_{n \mathop \to \infty} \map {y_n} x = \map y x$ is also continuous from Combination Theorem for Sequences.


Solution Satisfies Differential Equation
We now show that $y = \map y x$ satisfies the differential equation $y' = \map f {x, y}$.
Since:

$\map {y_n} x$ converges uniformly to $\map y x$ in the open interval $\openint {a - h} {a + h}$ from Uniform Convergence of Sequence above
$\size {\map f {x, y} - \map f {x, y_n} } \le A \size {y - y_n}$ from the Lipschitz condition in $y$
it follows that $\map f {x, \map {y_n} x}$ tends uniformly to $\map f {x, \map y x}$.
Letting $n \to \infty$ in:

$\ds \map {y_n} x = b + \int_a^x \map f {t, \map {y_{n - 1} } t} \rd t$
we get:

$\ds \map y x = b + \int_a^x \map f {t, \map y t} \rd t$
The integrand $\map f {t, \map y t}$ is a continuous function of $t$.
Therefore the integral has the derivative $\map f {x, y}$.
Also, we have that $\map y a = b$.


Uniqueness of Solution
We now show that the solution $y = \map y x$ that we have found is the only solution where $\map y a = b$.
Aiming for a contradiction, suppose there is another such solution, $y = \map Y x$, say.
Let $\size {\map Y x - \map y x} \le B$ when $\size {x - a} \le h$. (Certainly we could take $B = 2 k$.)
Then:

$\ds \map Y x - \map y x = \int_a^x \paren {\map f {t, \map Y t} - \map f {t, \map y t} } \rd t$
But:

$\size {\map f {t, \map Y t} - \map f {t, \map y t} } \le A \size {\map Y t - \map y t} \le A B$
So:

$\size {\map Y t - \map y t} \le A B \size {x - a}$
Repeating the argument, we can get successive estimates for the upper bound of $\size {\map Y x - \map y x}$ in $\openint {a - h} {a + h}$.
This gives:

$\ds \frac {A^2 B} {2!} \size {x - a}^2, \ldots, \frac {A^n B} {n!} \size {x - a}^n, \ldots$
But this sequence tends to $0$.
So $\map Y x = \map y x$ in $\openint {a - h} {a + h}$.
This contradicts the supposition that $\map Y x$ and $\map y x$ are different.
Hence by Proof by Contradiction it follows that $\map y x$ is unique.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations: $11$: The Existence and Uniqueness of Solutions: $\S 56$: Picard's Theorem: Theorem $\text{A}$




