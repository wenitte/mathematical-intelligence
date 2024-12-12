# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Dipper_Semigroup



Theorem
Let $m \in \N$ be a natural number.
Let $n \in \N_{>0}$ be a non-zero natural number.

The following definitions of the concept of Dipper Semigroup are equivalent:

Definition 1
Let $+_{m, n}$ be the dipper operation on $\N_{< \paren {m \mathop + n} }$:

$\forall a, b \in \N_{< \paren {m \mathop + n} }: a +_{m, n} b = \begin{cases} a + b & : a + b < m \\ a + b - k n & : a + b \ge m \end{cases}$
where $k$ is the largest integer satisfying:

$m + k n \le a + b$

A dipper (semigroup) is a semigroup which is isomorphic to the algebraic structure $\struct {N_{< \paren {m \mathop + n} }, +_{m, n} }$.

Definition 2
Let $\RR_{m, n}$ be the dipper relation on $\N$:

$\forall x, y \in \N: x \mathrel {\RR_{m, n} } y \iff \begin {cases} x = y \\ m \le x < y \text { and } n \divides \paren {y - x} \\  m \le y < x \text { and } n \divides \paren {x - y} \end {cases}$
Let $\map D {m, n} := \N / \RR_{m, n}$ be the quotient set of $\N$ induced by $\RR_{m, n}$.
Let $\oplus_{m, n}$ be the operation induced on $\map D {m, n}$ by addition on $\N$.

A dipper (semigroup) is a semigroup which is isomorphic to the algebraic structure $\struct {\map D {m, n}, \oplus_{m, n} }$.


Proof
We have established in Dipper Semigroup is Commutative Semigroup that $\struct {\N_{< \paren {m + n} }, \oplus_{m, n} }$ is a (commutative) semigroup.

Let $\phi_{m, n}$ be the canonical surjection from $\N$ onto $\map D {m, n}$.
It will be established that the restriction of $\phi_{m, n}$ to $\N_{< \paren {m + n} }$ is an isomorphism from the semigroup $\struct {\N_{< \paren {m + n} }, +_{m, n} }$ onto $\struct {\map D {m, n}, \oplus_{m, n} }$.

From Dipper Relation is Equivalence Relation we have that:

$\RR_{m, n}$ is an equivalence relation

By definition of canonical surjection:

$\phi_{m, n}: \N_{< \paren {m + n} } \to \map D {m, n}: \map {\phi_{m, n} } x = \eqclass x {\RR_{m, n} }$
By definition $\phi_{m, n}$ is indeed a surjection.
Then we have:










\(\ds \forall x, y \in \N_{< \paren {m + n} }: \, \)



\(\ds \map {\phi_{m, n} } x\)

\(=\)







\(\ds \map {\phi_{m, n} } y\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)


















\(\, \ds \lor \, \)

\(\ds \size {x - y}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)









Hence $\phi_{m, n}$ is an injection.
Thus $\phi_{m, n}$ is by definition a bijection.

It remains to show that $\phi_{m, n}$ has the morphism property.
Let $x, y \in \N_{< \paren {m + n} }$ be arbitrary.
We have:














\(\ds \map {\phi_{m, n} } {x +_{m, n} y}\)

\(=\)







\(\ds \map {\phi_{m, n} } {x + y - k n}\)





Definition of $+_{m, n}$: where $k$ is the largest integer satisfying $m + k n \le a + b$














\(\ds \)

\(=\)







\(\ds \eqclass {x + y - k n} {\RR_{m, n} }\)




















\(\ds \)

\(=\)







\(\ds \eqclass {x + y} {\RR_{m, n} }\)




















\(\ds \)

\(=\)







\(\ds \eqclass x {\RR_{m, n} } \oplus_{m, n} \eqclass y {\RR_{m, n} }\)




















\(\ds \)

\(=\)







\(\ds \map {\phi_{m, n} } x \oplus_{m, n} \map {\phi_{m, n} } y\)









$\blacksquare$


Examples
Example: $m = 0$
Let $+_n$ be the operation on $\N_{<n}$ defined as:

$\forall a, b \in \N_{<n}: a +_n b = a + b - k n$
where $k$ is the largest integer satisfying:

$k n \le a + b$

Let $\RR_n$ be the relation on $\N$ defined as:

$\forall x, y \in \N: x \mathrel {\RR_n} y \iff n \divides \size {x - y}$

Let $\map D n := \N / \RR_n$ be the quotient set of $\N$ induced by $\RR_n$.
Let $\oplus_n$ be the operation induced on $\map D n$ by addition on $\N$.

Then $\struct {\N_{<n}, +_n}$ is isomorphic to  $\struct {\map D n, \oplus_n}$.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.6 \ \text {(b)}$




