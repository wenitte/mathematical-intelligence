# 

Source: https://proofwiki.org/wiki/User:Jshflynn/Kleene_Plus_is_Linguistic_Structure

Theorem
Let $\Sigma$ be an alphabet, $\Sigma^{+}$ be the Kleene plus of $\Sigma$ and $\circ$ denote concatenation.

Then $(\Sigma^{+}, \circ)$ is a linguistic structure.


Proof
As $\Sigma^{+} \subseteq \Sigma^{*}$ we have that $\Sigma^{+}$ is a formal language over $\Sigma$.

From the definition of $\Sigma^{+}$ it follows: 


$x \in \Sigma^{+} \Leftrightarrow \operatorname{len}(x)>0$ and $\forall i: x_i \in \Sigma$.

Let $x, y \in \Sigma^{+}$
 
From Length of Concatenation: 


$\operatorname{len}(x)>0$ and $\operatorname{len}(y)>0$

So:


$\operatorname{len}(x \circ y)>0$

From the definition of concatenation:


$\forall i: x_i \in \Sigma$ and $\forall i: y_i \in \Sigma$

So:


$\forall i: (x \circ y)_i \in \Sigma$.

Hence $\Sigma^{+}$ is closed under $\circ$ and $(\Sigma^{+}, \circ)$ is a linguistic structure.

$\blacksquare$





