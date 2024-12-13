# 

Source: https://proofwiki.org/wiki/Primitive_of_Pointwise_Sum_of_Functions



Theorem
Let $f_1, f_2, \ldots, f_n$ be real functions which are integrable.
Then:

$\ds \int \map {\paren {f_1 \pm f_2 \pm \, \cdots \pm f_n} } x \rd x = \int \map {f_1} x \rd x \pm \int \map {f_2} x \rd x \pm \, \cdots \pm \int \map {f_n} x \rd x$


Proof 1
Proof by induction:
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\ds \int \map {\paren {f_1 \pm f_2 \pm \, \cdots \pm f_n} } x \rd x = \int \map {f_1} x \rd x \pm \int \map {f_2} x \rd x \pm \, \cdots \pm \int \map {f_n} x \rd x$

$\map P 1$ is true, as this just says:

$\ds \int \map {f_1} x \rd x = \int \map {f_1} x \rd x$


Basis for the Induction
$\map P 2$ is the case:














\(\ds \int \map {\paren {f_1 \pm f_2} } x \rd x\)

\(=\)







\(\ds \int \paren {\map {f_1} x \pm \map {f_2} x} \rd x\)





Definition of Pointwise Addition of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \int \map {f_1} x \rd x \pm \map {f_2} x \rd x\)





Linear Combination of Primitives



This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \int \map {\paren {f_1 \pm f_2 \pm \, \cdots \pm f_k} } x \rd x = \int \map {f_1} x \rd x \pm \int \map {f_2} x \rd x \pm \, \cdots \pm \int \map {f_k} x \rd x$

Then we need to show:

$\ds \int \map {\paren {f_1 \pm f_2 \pm \, \cdots \pm f_{k + 1} } } x \rd x = \int \map {f_1} x \rd x \pm \int \map {f_2} x \rd x \pm \, \cdots \pm \int \map {f_{k + 1} } x \rd x$


Induction Step
This is our induction step:















\(\ds \)

\(\)







\(\ds \int \map {\paren {f_1 \pm f_2 \pm \, \cdots \pm f_{k + 1} } } x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {\map {\paren {f_1 \pm f_2 \pm \, \cdots \pm f_k} } x + \map {f_{k + 1} } x} \rd x\)





Definition of Pointwise Addition of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \int \map {\paren {f_1 \pm f_2 \pm \, \cdots \pm f_k} } x \rd x + \int \map {f_{k + 1} } x \rd x\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \int \map {f_1} x \rd x \pm \int \map {f_2} x \rd x \pm \, \cdots \pm \int \map {f_k} x \rd x + \int \map {f_{k + 1} } x \rd x\)





Induction Hypothesis



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N: \ds \int \map {\paren {f_1 \pm f_2 \pm \, \cdots \pm f_n} } x \rd x = \int \map {f_1} x \rd x \pm \int \map {f_2} x \rd x \pm \, \cdots \pm \int \map {f_n} x \rd x$
$\blacksquare$


Proof 2
From Sum Rule for Derivatives:

$\ds \map {\dfrac \d {\d x} } {\sum_{i \mathop = 1}^n \map {f_i} x} = \sum_{i \mathop = 1}^n \map {\dfrac \d {\d x} } {\map {f_i} x}$

The result follows by definition of primitive.
$\blacksquare$


Examples
Primitive of $f + g$
Let $f$ and $g$ be real functions of $x$ which are integrable.
Then:

$\ds \int \paren {\map f x + \map g x} \rd x = \int \map f x \rd x + \int \map g x \rd x$


Primitive of $u + v + w$
Let $u$, $v$ and $w$ be real functions of $x$ which are integrable.
Then:

$\ds \int \paren {u + v + w} \rd x = \int u \rd x + \int v \rd x + \int w \rd x$


Primitive of $u + v - w$
Let $u$, $v$ and $w$ be real functions of $x$ which are integrable.
Then:

$\ds \int \paren {u + v - w} \rd x = \int u \rd x + \int v \rd x - \int w \rd x$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.3$




