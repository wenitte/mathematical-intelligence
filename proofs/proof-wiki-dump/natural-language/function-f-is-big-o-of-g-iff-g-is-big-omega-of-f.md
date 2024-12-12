# 

Source: https://proofwiki.org/wiki/Function_f_is_Big-O_of_g_iff_g_is_Big-Omega_of_f


It has been suggested that this page be renamed.In particular: Not sure but this is not elegantTo discuss this page in more detail, feel free to use the talk page.


Theorem
Let $f: \N \to \R, g: \N \to \R$ be two real sequences, expressed here as real-valued functions on the set of natural numbers $\N$.
Then:

$\map f n \in \map \OO {\map g n}$
if and only if:

$\map g n \in \map \Omega {\map f n}$
where:

$\OO$ denotes big-$\OO$ notation
$\Omega$ denotes big-$\Omega$ notation.


Proof
Recall the definitions:

$\map \Omega f = \set {g: \N \to \R: \exists c_1 \in \R_{>0}: \exists n_1 \in \N: \forall n > n_1: 0 \le c_1 \cdot \size {\map f n} \le \size {\map g n} }$
$\map \OO g = \set {f: \N \to \R: \exists c_2 \in \R_{>0}: \exists n_2 \in \N: \forall n > n_2: 0 \le \size {\map f n} \le c_2 \cdot \size {\map g n} }$
for some $n_1, n_2 \in \N$.



This needs considerable tedious hard slog to complete it.In particular: Note that the above are the canonical definitions which are to be used during the course of the below. Failing to take into account the sign of the function may render this proof incomplete.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Hence:

If $g \in \map \Omega f$, then $\forall n > n_1: \exists c_1 > 0 : \map g n \ge c_1 \cdot \map f n$
If $f \in \map \OO g$, then $\forall n > n_2: \exists c_2 > 0 : \map f n \le c_2 \cdot \map g n$

First let us assume that $n \ge \max \set {n_1, n_2}$ in all the below work.


Sufficient Condition
Let $g \in \map \Omega f$.
Then:














\(\ds \map g n\)

\(\ge\)







\(\ds c_1 \cdot \map f n\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 {c_1} \cdot \map g n\)

\(\ge\)







\(\ds \map f n\)





dividing by $c_1$, as $c_1 \ne 0$








\(\ds \leadsto \ \ \)





\(\ds c_2 \cdot \map g n\)

\(\ge\)







\(\ds \map f n\)





setting $c_2 := \dfrac 1 {c_1}$








\(\ds \leadsto \ \ \)





\(\ds f\)

\(\in\)







\(\ds \map \OO g\)





Definition of Big-$\OO$ Notation



Hence we have:

$g \in \map \Omega f \implies f \in \map \OO g$
$\Box$


Necessary Condition
Let $f \in \map \OO g$.
Then:














\(\ds \map f n\)

\(\le\)







\(\ds c_2 \cdot \map g n\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 {c_2} \cdot \map f n\)

\(\le\)







\(\ds \map g n\)





dividing by $c_2$, as $c_2 \ne 0$








\(\ds \leadsto \ \ \)





\(\ds c_2 \cdot \map f n\)

\(\le\)







\(\ds \map g n\)





setting $c_2 := \dfrac 1 {c_1}$








\(\ds \leadsto \ \ \)





\(\ds g\)

\(\in\)







\(\ds \map \Omega f\)





Definition of Big-$\Omega$ Notation



Hence we have:

$f \in \map \OO g \implies g \in \map \Omega g$
$\Box$

Both conditions have been proven, hence:

$f \in \map \OO g \iff g \in \map \Omega f$
$\blacksquare$


Sources
1990: Thomas H. Cormen, Charles E. Leiserson and Ronald L. Rivest: Introduction to Algorithms ... (previous): $2$: Growth of Functions: $2.1$ Asymptotic Notation: $\Omega$-notation




