# 

Source: https://proofwiki.org/wiki/Group_Action_of_Symmetric_Group_on_Complex_Vector_Space/Stabilizer/Examples/Example_1

Example of Orbit of Group Action of Symmetric Group on Complex Vector Space
Let $S_n$ denote the symmetric group on $n$ letters.
Let $V$ denote a vector space over the complex numbers $\C$.

Let $V$ have a basis:

$\BB := \set {v_1, v_2, \ldots, v_n}$
Let $*: S_n \times V \to V$ be a group action of $S_n$ on $V$ defined as:

$\forall \tuple {\rho, v} \in S_n \times V: \rho * v := \lambda_1 v_{\map \rho 1} + \lambda_2 v_{\map \rho 2} + \dotsb + \lambda_n v_{\map \rho n}$
where:

$v = \lambda_1 v_1 + \lambda_2 v_2 + \dotsb + \lambda_n v_n$

Let $n = 4$.
Let $v = v_1 + v_2 + v_3 + v_4$.
The stabilizer of $v$ is:

$\Stab v = S_4$


Proof
From the page discussing the Orbit of $v$:

$\Orb v = \set v$
From the Orbit-Stabilizer Theorem:

$\order {\Orb v} = \dfrac {\order {S_4} } {\order {\Stab v} }$
where $\order {\Stab v}$ denotes the order, that is, the cardinality of $\Stab v$.
Hence:

$\order {\Stab v} = \dfrac {\order {S_4} } {\order {\Orb v} } = \dfrac {\order {S_4} } 1 = \order {S_4}$
from which it follows that:

$\Stab v = S_4$
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $10$: The Orbit-Stabiliser Theorem: Exercise $1 \ \text {(a)}$




