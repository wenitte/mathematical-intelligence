# 

Source: https://proofwiki.org/wiki/H%C3%B6lder%27s_Inequality_for_Sums/Formulation_2



Theorem
Let $p, q \in \R_{>0}$ be strictly positive real numbers such that:

$\dfrac 1 p + \dfrac 1 q = 1$
Let $\GF \in \set {\R, \C}$, that is, $\GF$ represents the set of either the real numbers or the complex numbers.

Let $\sequence {x_n}_{n \mathop \in \N}$ and $\sequence {y_n}_{n \mathop \in \N}$ be sequences in $\GF$ such that $\ds \sum_{k \mathop \in \N} \size {x_k}^p$ and $\ds \sum_{k \mathop \in \N} \size {y_k}^q$ are convergent.

Then:

$\ds \sum_{k \mathop \in \N} \size {x_k y_k} \le \paren {\sum_{k \mathop \in \N} \size {x_k}^p}^{1 / p} \paren {\sum_{k \mathop \in \N} \size {y_k}^q}^{1 / q}$


Finite Form
$\ds \sum \limits_{k \mathop = 1}^n \size {x_k y_k} \le \paren {\sum_{k \mathop = 1}^n \size {x_k}^p}^{1 / p} \paren {\sum_{k \mathop = 1}^n \size {y_k}^q}^{1 / q}$
where the summations are finite.


Condition for Equality
$\ds \sum_{k \mathop \in \N} \size {x_k y_k} = \paren {\sum_{k \mathop \in \N} \size {x_k}^p}^{1 / p} \paren {\sum_{k \mathop \in \N} \size {y_k}^q}^{1 / q}$
if and only if:

$\forall k \in \N: \size {y_k} = c \size {x_k}^{p - 1}$
for some real constant $c$.


Proof
Let:














\(\ds X\)

\(=\)







\(\ds \paren {\sum_{k \mathop \in \N} \size {x_k}^p}^{1 / p}\)




















\(\ds Y\)

\(=\)







\(\ds \paren {\sum_{k \mathop \in \N} \size {y_k}^q}^{1 / q}\)









We note that $X, Y \in \R_{\ge 0}$.

Let:










\(\ds \forall k \in \N: \, \)



\(\ds u_k\)

\(=\)







\(\ds \dfrac {x_k} X\)




















\(\ds v_k\)

\(=\)







\(\ds \dfrac {y_k} Y\)










We have:










\(\ds \forall k \in \N: \, \)



\(\ds \size {u_k v_k}\)

\(=\)







\(\ds \size {u_k} \size {v_k}\)





Absolute Value Function is Completely Multiplicative




\(\text {(1)}: \quad\)









\(\ds \)

\(\le\)







\(\ds \dfrac 1 p \size {u_k}^p + \dfrac 1 q \size {v_k}^q\)





Young's Inequality for Products








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop \in \N} \size {u_k v_k}\)

\(\le\)







\(\ds \sum_{k \mathop \in \N} \dfrac 1 p \size {u_k}^p + \sum_{k \mathop \in \N} \dfrac 1 q \size {v_k}^q\)





summing over $\N$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in \N} \dfrac 1 p \size {\dfrac {x_k} X}^p + \sum_{k \mathop \in \N} \dfrac 1 q \size {\dfrac {y_k} Y}^q\)





substituting for $u_k$ and $v_k$














\(\ds \)

\(=\)







\(\ds \dfrac 1 p \paren {\dfrac 1 {X^p} \sum_{k \mathop \in \N} \size {x_k}^p} + \dfrac 1 q \paren {\dfrac 1 {Y^q} \sum_{k \mathop \in \N} \size {y_k}^q}\)





extracting constants














\(\ds \)

\(=\)







\(\ds \dfrac 1 p + \dfrac 1 q\)





as $\ds X^p = \sum_{k \mathop \in \N} \size {x_k}^p$ and $\ds Y^q = \sum_{k \mathop \in \N} \size {y_k}^q$














\(\ds \)

\(=\)







\(\ds 1\)





by hypothesis




Then:










\(\ds \forall k \in \N: \, \)



\(\ds \size {x_k y_k}\)

\(=\)







\(\ds X Y \size {u_k v_k}\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop \in \N} \size {x_k y_k}\)

\(=\)







\(\ds X Y \sum_{k \mathop \in \N} \size {u_k v_k}\)





summing over $\N$














\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop \in \N} \size {x_k}^p}^{1 / p} \paren {\sum_{k \mathop \in \N} \size {y_k}^q}^{1 / q} \sum_{k \mathop \in \N} \size {u_k v_k}\)





by hypothesis














\(\ds \)

\(\le\)







\(\ds \paren {\sum_{k \mathop \in \N} \size {x_k}^p}^{1 / p} \paren {\sum_{k \mathop \in \N} \size {y_k}^q}^{1 / q} \times 1\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop \in \N} \size {x_k}^p}^{1 / p} \paren {\sum_{k \mathop \in \N} \size {y_k}^q}^{1 / q}\)









Hence the result.
$\blacksquare$


Parameter Inequalities
Statements of Hölder's Inequality for Sums will commonly insist that $p, q > 1$.
However, we note that from Positive Real Numbers whose Reciprocals Sum to 1 we have that if:

$p, q > 0$
and:

$\dfrac 1 p + \dfrac 1 q = 1$
it follows directly that $p, q > 1$.


Also known as
Hölder's Inequality for Sums is also seen referred to just as Hölder's Inequality.
This allows it to be confused with Hölder's Inequality for Integrals, so the full form is used on $\mathsf{Pr} \infty \mathsf{fWiki}$.


Also see
Minkowski's Inequality for Sums


Source of Name
This entry was named for Otto Ludwig Hölder.


Historical Note
Hölder's Inequality for Sums was first found by Leonard James Rogers in $1888$, and discovered independently by Otto Ludwig Hölder in $1889$.


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Hölder's inequality: 2.




