# 

Source: https://proofwiki.org/wiki/User:Jshflynn/Product_of_Languages_is_Language

Theorem
Let $\Sigma$ be an alphabet.

Let $\circ$ denote concatenation and $\circ_L$ denote the language product operation. 

Then the product of two formal languages over $\Sigma$ is also a formal language over $\Sigma$.


Proof
Let $V$ and $W$ be formal languages over $\Sigma$.

Let $x \in V \circ_L W$.

Then by the definition of product this implies there exists a $y \in V$ and $z \in W$ such that $x = y \circ z$.

From Length of Concatenation:


$\operatorname{len}(x) = \operatorname{len}(y) + \operatorname{len}(z)$

And by the definition of concatenation: 


$\forall i: x_i \in \Sigma$.

So by the definition of language power:


$x \in \Sigma^{\operatorname{len}(y) + \operatorname{len}(z)}$

Finally, by the definition of $\Sigma^{*}$:


$V \circ_L W \subseteq \Sigma^{*}$

Hence $V$ is a formal language over $\Sigma$.

$\blacksquare$





