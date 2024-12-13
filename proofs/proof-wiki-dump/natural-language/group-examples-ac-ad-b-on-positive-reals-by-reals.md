# 

Source: https://proofwiki.org/wiki/Group/Examples/ac,_ad%2Bb_on_Positive_Reals_by_Reals



Example of Group
Let $\R$ denote the set of real numbers.
Let $\R_{\ge 0}$ denote the set of positive real numbers.

Let $S = \R_{\ge 0} \times \R$ denote the Cartesian product of $\R_{\ge 0}$ and $\R$.
Let $\oplus: S \to S$ be the operation on $S$ defined as:

$\forall \tuple {a, b}, \tuple {c, d} \in S: \tuple {a, b} \oplus \tuple {c, d} := \tuple {a c, a d + b}$

Then the algebraic structure $\struct {S, \oplus}$ is a group.


Proof
Taking the group axioms in turn:


Group Axiom $\text G 0$: Closure
Let $\tuple {a, b}, \tuple {c, d} \in S$ be arbitrary.
We have that:














\(\ds a\)

\(\ge\)







\(\ds 0\)





Definition of $S$














\(\ds c\)

\(\ge\)







\(\ds 0\)





Definition of $S$








\(\ds \leadsto \ \ \)





\(\ds a c\)

\(\ge\)







\(\ds 0\)





Product of Positive Real Numbers is Positive



Then from Real Numbers form Field we haveL

$a d + b \in \R$

Thus $\tuple {a c, a d + b} \in \R_{\ge 0} \times \R$ and so $\struct {S, \oplus}$ is closed.
$\Box$


Group Axiom $\text G 1$: Associativity
Let $\tuple {a, b}, \tuple {c, d}, \tuple {e, f} \in S$ be arbitrary.















\(\ds \paren {\tuple {a, b} \oplus \tuple {c, d} } \oplus \tuple {e, f}\)

\(=\)







\(\ds \tuple {a c, a d + b} \oplus \tuple {e, f}\)





Definition of $\oplus$














\(\ds \)

\(=\)







\(\ds \tuple {\paren {a c} e, \paren {a c} f + a d + b}\)





Definition of $\oplus$














\(\ds \)

\(=\)







\(\ds \tuple {a c e, a c f + a d + b}\)





simplifying


















\(\ds \tuple {a, b} \oplus \paren {\tuple {c, d} \oplus \tuple {e, f} }\)

\(=\)







\(\ds \tuple {a, b} \oplus \tuple {c e, c f + d}\)





Definition of $\oplus$














\(\ds \)

\(=\)







\(\ds \tuple {a \paren {c e}, a \paren {c f + d} + b}\)





Definition of $\oplus$














\(\ds \)

\(=\)







\(\ds \tuple {a c e, a c f + a d + b}\)





simplifying




Thus $\paren {\tuple {a, b} \oplus \tuple {c, d} } \oplus \tuple {e, f} = \tuple {a, b} \oplus \paren {\tuple {c, d} \oplus \tuple {e, f} }$ and so $\struct {S, \oplus}$ is associative.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
We have:














\(\ds \tuple {a, b} \oplus \tuple {1, 0}\)

\(=\)







\(\ds \tuple {a \times 1, a \times 0 + b}\)





Definition of $\oplus$














\(\ds \)

\(=\)







\(\ds \tuple {a, b}\)




















\(\ds \tuple {1, 0} \oplus \tuple {a, b}\)

\(=\)







\(\ds \tuple {1 \times a, 1 \times b + 0}\)





Definition of $\oplus$














\(\ds \)

\(=\)







\(\ds \tuple {a, b}\)










Thus $\tuple {1, 0}$ is the identity element of $\struct {S, \oplus}$.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
We have that $\tuple {1, 0}$ is the identity element of $\struct {S, \oplus}$.
Hence we need to find $\tuple {c, d} \in S$ such that $\tuple {a, b} \oplus \tuple {c, d} = \tuple {1, 0}$.
Hence:














\(\ds a c\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds c\)

\(=\)







\(\ds \dfrac 1 a\)









and:














\(\ds a d + b\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds d\)

\(=\)







\(\ds -\dfrac b a\)










Thus every element $\tuple {a, b}$ of $\struct {S, \oplus}$ has an inverse $\tuple {\dfrac 1 a, -\dfrac b a}$.
$\Box$

All the group axioms are thus seen to be fulfilled, and so $\struct {S, \oplus}$ is a group.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Exercise $8.7 \ \text {(a)}$




