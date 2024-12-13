# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_x_by_Exponential_of_a_x



Theorem
Let $n$ be a positive integer.
Let $a$ be a non-zero real number.
Then:














\(\ds \int x^n e^{a x} \rd x\)

\(=\)







\(\ds \frac {e^{a x} } a \paren {x^n - \dfrac {n x^{n - 1} } a + \dfrac {n \paren {n - 1} x^{n - 2} } {a^2} - \dfrac {n \paren {n - 1} \paren {n - 2} x^{n - 3} } {a^3} + \cdots + \dfrac {\paren {-1}^n n!} {a^n} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } a \sum_{k \mathop = 0}^n \paren {\paren {-1}^k \frac {n^{\underline k} x^{n - k} } {a^k} } + C\)









where $n^{\underline k}$ denotes the $k$th falling factorial power of $n$.


Proof
Proof by induction:
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\ds \int x^n e^{a x} \rd x = \frac {e^{a x} } a \sum_{k \mathop = 0}^n \paren {\paren {-1}^k \frac {n^{\underline k} x^{n - k} } {a^k} } + C$

$\map P 0$ is true, as from Primitive of $e^{a x}$:

$\ds \int e^{a x} \rd x = \frac {e^{a x} } a$


Basis for the Induction
$\map P 1$ is the case:














\(\ds \int x e^{a x} \rd x\)

\(=\)







\(\ds \frac {e^{a x} } a \paren {x - \frac 1 a} + C\)





Primitive of $x e^{a x}$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^1 \paren {\paren {-1}^k \frac {n^{\underline k} x^{n - k} } {a^k} }\)









This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P r$ is true, where $r \ge 2$, then it logically follows that $\map P {r + 1}$ is true.

So this is our induction hypothesis:

$\ds \int x^r e^{a x} \rd x = \frac {e^{a x} } a \sum_{k \mathop = 0}^r \paren {\paren {-1}^k \frac {r^{\underline k} x^{r - k} } {a^k} } + C$

Then we need to show:

$\ds \int x^{r + 1} e^{a x} \rd x = \frac {e^{a x} } a \sum_{k \mathop = 0}^{r + 1} \paren {\paren {-1}^k \frac {\paren {r + 1}^{\underline k} x^{r + 1 - k} } {a^k} } + C$


Induction Step
This is our induction step:














\(\ds \int x^{r + 1} e^{a x} \rd x\)

\(=\)







\(\ds \frac {x^{r + 1} e^{a x} } a - \frac {r + 1} a \int x^r e^{a x} \rd x + C\)





Primitive of $x^n e^{a x}$: Lemma














\(\ds \)

\(=\)







\(\ds \frac {x^{r + 1} e^{a x} } a - \frac {r + 1} a \paren {\frac {e^{a x} } a \sum_{k \mathop = 0}^r \paren {\paren {-1}^k \frac {r^{\underline k} x^{r - k} } {a^k} } } + C\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } a \paren {x^{r + 1} - \frac {r + 1} a \paren {\sum_{k \mathop = 0}^r \paren {\paren {-1}^k \frac {r^{\underline k} x^{r - k} } {a^k} } } } + C\)





factorising $\dfrac {e^{a x} } a$














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } a \paren {x^{r + 1} - \sum_{k \mathop = 0}^r \paren {\paren {-1}^k \frac {\paren {r + 1} r^{\underline k} x^{r - k} } {a^{k + 1} } } } + C\)





moving $\dfrac {r + 1} a$ within the summation














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } a \paren {x^{r + 1} - \sum_{k \mathop = 1}^{r + 1} \paren {\paren {-1}^{k - 1} \frac {\paren {r + 1} r^{\underline {k - 1} } x^{r - k + 1} } {a^k} } } + C\)





changing limits of summation














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } a \paren {x^{r + 1} + \sum_{k \mathop = 1}^{r + 1} \paren {\paren {-1}^k \frac {\paren {r + 1}^{\underline k} x^{r - k + 1} } {a^k} } } + C\)





Definition of Falling Factorial, multplying summation by $-1$














\(\ds \)

\(=\)







\(\ds \frac {e^{a x} } a \sum_{k \mathop = 0}^{r + 1} \paren {\paren {-1}^k \frac {\paren {r + 1}^{\underline k} x^{r + 1 - k} } {a^k} } + C\)





moving initial term into summation




So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \int x^n e^{a x} \rd x = \frac {e^{a x} } a \sum_{k \mathop = 0}^n \paren {\paren {-1}^k \frac {n^{\underline k} x^{n - k} } {a^k} } + C$
$\blacksquare$


Examples
Primitive of $x^3 e^{-x}$
$\ds \int x^3 e^{-x} \rd x = -e^{-x} \paren {x^3 + 3 x^2 + 6 x + 6} + C$


Also see
Primitive of $\dfrac {e^{a x} } x$ for the case where $n = -1$
Primitive of $\dfrac {e^{a x} } {x^n}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $e^{a x}$: $14.512$




