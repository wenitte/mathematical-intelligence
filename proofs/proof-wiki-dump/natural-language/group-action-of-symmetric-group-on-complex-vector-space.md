# 

Source: https://proofwiki.org/wiki/Group_Action_of_Symmetric_Group_on_Complex_Vector_Space



Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $S_n$ denote the symmetric group on $n$ letters.
Let $V$ denote a vector space over the complex numbers $\C$.
Let $V$ have a basis:

$\BB := \set {v_1, v_2, \ldots, v_n}$

Let $*: S_n \times V \to V$ be a group action of $S_n$ on $V$ defined as:

$\forall \tuple {\rho, v} \in S_n \times V: \rho * v := \lambda_1 v_{\map \rho 1} + \lambda_2 v_{\map \rho 2} + \dotsb + \lambda_n v_{\map \rho n}$
where:

$v = \lambda_1 v_1 + \lambda_2 v_2 + \dotsb + \lambda_n v_n$

Then $*$ is a group action.


Orbit of Element of $V$
The orbit of an element $v \in V$ is:

$\ds \Orb v = \set {w \in V: \exists \rho \in S_n: w = \sum_{k \mathop = 1}^n \lambda_k v_{\map \rho k} }$


Stabilizer of Element of $V$
The stabilizer of an element $v \in V$ is:

$\ds \Stab v = \set {\rho \in S_n: \sum_{k \mathop = 1}^n \lambda_k v_k = \sum_{k \mathop = 1}^n \lambda_{\map \rho k} v_k}$


Proof
Let $\rho, \sigma \in S_n$.
Let $v = \ds \sum_{k \mathop = 1}^n \lambda_k v_k$.

We have:














\(\ds \rho * \paren {\sigma * v}\)

\(=\)







\(\ds \rho * \paren {\sigma * \sum_{k \mathop = 1}^n \lambda_k v_k}\)





Definition of $v$














\(\ds \)

\(=\)







\(\ds \rho * \sum_{k \mathop = 1}^n \lambda_k v_{\map \sigma k}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \lambda_k v_{\map \rho {\map \sigma k} }\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \lambda_k v_{\map {\rho \mathop \circ \sigma} k}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \paren {\rho \circ \sigma} * \sum_{k \mathop = 1}^n \lambda_k v_k\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \paren {\rho \circ \sigma} * v\)





Definition of $v$



Hence $*$ fulfils Group Action Axiom $\text {GA} 1$.

Let $e$ denote the identity element of $S_n$.
Then:














\(\ds e * v\)

\(=\)







\(\ds e * \sum_{k \mathop = 1}^n \lambda_k v_k\)





Definition of $v$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \lambda_k v_{\map e k}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \lambda_k v_k\)





Definition of $e$














\(\ds \)

\(=\)







\(\ds v\)





Definition of $v$



Hence $*$ fulfils Group Action Axiom $\text {GA} 2$.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $10$: The Orbit-Stabiliser Theorem: Exercise $1$




