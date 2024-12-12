# 

Source: https://proofwiki.org/wiki/Closed_Form_for_Triangular_Numbers/Proof_using_Cardinality_of_Set

Theorem
The closed-form expression for the $n$th triangular number is:

$\ds T_n = \sum_{i \mathop = 1}^n i = \frac {n \paren {n + 1} } 2$


Proof
Let $\N_n^* = \set {1, 2, 3, \cdots, n}$ be the initial segment of natural numbers.
Let $A = \set {\tuple {a, b}: a \le b, a, b \in \N_n^*}$
Let $B = \set {\tuple {a, b}: a \ge b, a, b, \in \N_n^*}$

Let $\phi: A \to B$ be the mapping:

$\map \phi {x, y} = \tuple {y, x}$
By definition of dual ordering, $\phi$ is a bijection:

$(1): \quad \size A = \size B$
We have:














\(\ds A \cup B\)

\(=\)







\(\ds \set {\tuple {a, b}: a, b \in \N_n^*}\)




















\(\ds A \cap B\)

\(=\)







\(\ds \set {\tuple {a, b}: a = b: a, b \in \N_n^*}\)









Thus:














\(\ds \size A + \size B\)

\(=\)







\(\ds \size {A \cup B} + \size {A \cap B}\)





Inclusion-Exclusion Principle














\(\ds \)

\(=\)







\(\ds n^2 + n\)





Count of a finite set



Combined with $\left({1}\right)$ this yields:

$\size A = \dfrac {n^2 + n} 2 = \dfrac {n \paren {n + 1} } 2$

It remains to prove that:

$T_n = \size A$













\(\ds T_n\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n i\)





Definition of $T_n$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in \N_n^*} i\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \in \N_n^*} \size {\set {a: a \in \N_i^*} }\)





Count of Finite Set,Definition of Initial Segment of One-Based Natural Numbers














\(\ds \)

\(=\)







\(\ds \size {\set {\tuple {a, i} :a\in \N_i^*, i \in \N_n^*} }\)





Inclusion-Exclusion Principle: the sets are pairwise disjoint as the second argument in the ordered pair is different














\(\ds \)

\(=\)







\(\ds \size {\set {\tuple {a, b}: a \le b, a, b \in \N_n^*} }\)





Change of Variable, Definition of Initial Segment of One-Based Natural Numbers














\(\ds \)

\(=\)







\(\ds \size A\)





Definition of $A$



$\blacksquare$





