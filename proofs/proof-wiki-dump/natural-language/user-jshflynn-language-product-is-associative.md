# 

Source: https://proofwiki.org/wiki/User:Jshflynn/Language_Product_is_Associative

Theorem
Let $\Sigma$ be an alphabet.

Let $U$, $V$ and $W$ be languages over $\Sigma$.

Then:


$U \circ_L \left({V \circ_L W}\right) = \left({U \circ_L V}\right) \circ_L W$

That is, language product is associative.


Proof
Let $U$, $V$ and $W$ be languages over $\Sigma$.

Then:















\(\ds U \circ_L \left({V \circ_L W}\right)\)

\(=\)







\(\ds \{ u \circ \left({v \circ w}\right): u \in U \land (v \in V \land w \in W) \}\)





By definition of language product














\(\ds \)

\(=\)







\(\ds \{ \left({u \circ v}\right) \circ w: u \in U \land (v \in V \land w \in W) \}\)





Concatenation is Associative














\(\ds \)

\(=\)







\(\ds \{ \left({u \circ v}\right) \circ w: (u \in U \land v \in V) \land w \in W \}\)





Rule of Association














\(\ds \)

\(=\)







\(\ds \left({U \circ_L V}\right) \circ_L W\)





By definition of language product



Hence the result

$\blacksquare$





