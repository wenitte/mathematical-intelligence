# 

Source: https://proofwiki.org/wiki/Integral_of_Positive_Simple_Function_is_Well-Defined

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f: X \to \R, f \in \EE^+$ be a positive simple function.

Then the $\mu$-integral of $f$, $\map {I_\mu} f$, is well-defined.
That is, for any two standard representations for $f$, say:

$\ds f = \sum_{i \mathop = 0}^n a_i \chi_{E_i} = \sum_{j \mathop = 0}^m b_j \chi_{F_j}$
it holds that:

$\ds \sum_{i \mathop = 0}^n a_i \map \mu {E_i} = \sum_{j \mathop = 0}^m b_j \map \mu {F_j}$


Proof
The sets $F_0, \ldots, F_m$ are pairwise disjoint, and:

$X = \ds \bigcup_{j \mathop = 0}^m F_j$
From Characteristic Function of Disjoint Union, we have:

$\chi_X = \ds \sum_{j \mathop = 0}^m \chi_{F_j}$
Remark that $\map {\chi_X} x = 1$ for all $x \in X$, so that we have:














\(\ds f\)

\(=\)







\(\ds \sum_{i \mathop = 0}^n a_i \chi_{E_i} \cdot 1\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n a_i \chi_{E_i} \paren {\sum_{j \mathop = 0}^m \chi_{F_j} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \sum_{j \mathop = 0}^m a_i \chi_{E_i} \chi_{F_j}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \sum_{j \mathop = 0}^m a_i \chi_{E_i \cap F_j}\)





Characteristic Function of Intersection: Variant 1



Repeating the argument with the $E_i$ and $F_j$ interchanged also yields:

$f = \ds \sum_{j \mathop = 0}^m \sum_{i \mathop = 0}^n b_j \chi_{F_j \cap E_i}$
Now whenever $x \in E_i \cap F_j$, for some $i, j$, then since the $E_i$, $F_j$ are disjoint, we find:

$x \in E_{i'} \cap F_{j'}$ implies $i = i'$ and $j = j'$
Thus, evaluating both expressions for $\map f x$ we find:

$a_i = \map f x = b_j$
In conclusion, we have:

$a_i = b_j$
if $E_i \cap F_j \ne \O$.

Furthermore, we have for all $i$ that:

$\ds E_i = E_i \cap X = E_i \cap \paren {\bigcup_{j \mathop = 0}^m F_j} = \bigcup_{j \mathop = 0}^m \paren {E_i \cap F_j}$
by Intersection Distributes over Union: General Result.
Similarly, we obtain for all $j$:

$\ds F_j = F_j \cap X = F_j \cap \paren {\bigcup_{i \mathop = 0}^n E_i} = \bigcup_{i \mathop = 0}^n \paren {F_j \cap E_i}$

With this knowledge, we compute:














\(\ds \sum_{i \mathop = 0}^n a_i \map \mu {E_i}\)

\(=\)







\(\ds \sum_{i \mathop = 0}^n a_i \map \mu {\bigcup_{j \mathop = 0}^m \paren {E_i \cap F_j} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n a_i \sum_{j \mathop = 0}^m \map \mu {E_i \cap F_j}\)





Measure is Finitely Additive Function














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \sum_{j \mathop = 0}^m a_i \map \mu {E_i \cap F_j}\)





Summation is Linear














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^m \sum_{i \mathop = 0}^n b_j \map \mu {E_i \cap F_j}\)





If $a_i \ne b_j$ then $E_i \cap F_j = \O$; $a_i \cdot 0 = b_j \cdot 0$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^m b_j \sum_{i \mathop = 0}^n \map \mu {E_i \cap F_j}\)





Summation is Linear














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^m b_j \map \mu {\bigcup_{i \mathop = 0}^n \paren {E_i \cap F_j} }\)





Measure is Finitely Additive Function














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^m b_j \map \mu {F_j}\)









Hence the result.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $9.1$




