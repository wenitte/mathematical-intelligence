# 

Source: https://proofwiki.org/wiki/General_Associativity_Theorem/Formulation_2/Proof_1

Theorem
Let $n \in \N_{>0}$ and let $a_1, \ldots, a_n$ be elements of a set $S$.
Let $\circ$ be an associative operation on $S$.
Let the set $\map {P_n} {a_1, a_2, \ldots, a_n}$ be defined inductively by:

$\map {P_1} {a_1} = \set {a_1}$
$\map {P_2} {a_1, a_2} = \set {a_1 \circ a_2}$
$\map {P_n} {a_1, a_2, \ldots, a_n} = \set {x \circ y: x \in \map {P_r} {a_1, a_2, \ldots, a_r} \land y \in \map {P_s} {a_{r + 1}, a_{r + 2}, \ldots, a_{r + s} }, n = r + s}$

Then $\map {P_n} {a_1, a_2, \ldots, a_n}$ consists of a unique entity which we can denote $a_1 \circ a_2 \circ \ldots \circ a_n$.


Proof
The cases where $n = 1$ and $n = 2$ are clear.
Let $a = x \circ y \in P_n: x \in P_r, y \in P_s$.
If $r > 1$ then we write $x = a_1 \circ z$ where $z = a_2 \circ a_3 \circ \ldots \circ a_r$ by induction.
Then $x \circ y = \paren {a_1 \circ z} \circ y = a_1 \circ \paren {z \circ y} = a_1 \circ \paren {a_2 \circ a_3 \circ \ldots \circ a_n}$ (again by induction).
If $r = 1$, then by induction $x \circ y = a_1 \circ y = a_1 \circ \paren {a_2 \circ a_3 \circ \ldots \circ a_n}$.
Thus in either case, $x \circ y = a_1 \circ \paren {a_2 \circ a_3 \circ \ldots \circ a_n}$ which is a single element of $P_n$.
Hence we see that $\map {P_n} {a_1, a_2, \ldots, a_n}$ consists of a single element.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $3$: Elementary consequences of the definitions: Proposition $3.6$




