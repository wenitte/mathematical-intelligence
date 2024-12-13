# 

Source: https://proofwiki.org/wiki/User:Jshflynn/Language_Product_Distributes_over_Union

Theorem
Let $\Sigma$ be an alphabet.

Let $V, W$ and $Y$ be formal languages over $\Sigma$.

Let $\circ$ denote concatenation and $\circ_L$ denote language product.

Then $\circ_L$ is distributive over $\circ$. That is, 


$V \circ_L \left({W \cup Y}\right) = \left({V \circ_L W} \right) \cup \left({V \circ_L Y}\right)$

And


$\left({W \cup Y}\right) \circ_L V = \left({W \circ_L V}\right) \cup \left({Y \circ_L V}\right)$


Proof













\(\ds V \circ_L \left({W \cup Y}\right)\)

\(=\)







\(\ds \{x \circ y: x \in V \land y \in W \cup Y\}\)





Definition of language product














\(\ds \)

\(=\)







\(\ds \set {x \circ y: x \in V \land \left({y \in W \lor y \in Y}\right)}\)





Definition of union














\(\ds \)

\(=\)







\(\ds \set {x \circ y: \left({x \in V \land y \in W}\right) \lor \left({x \in V \land y \in Y}\right)}\)





Rule of Distribution














\(\ds \)

\(=\)







\(\ds \left({V \circ_L W} \right) \cup \left({V \circ_L Y}\right)\)





Definition of language product




Hence language product is left distributive over union.

The proof that language product is right distributive follows similarly.

$\blacksquare$





