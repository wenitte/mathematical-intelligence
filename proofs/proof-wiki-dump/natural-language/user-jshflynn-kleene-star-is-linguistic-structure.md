# 

Source: https://proofwiki.org/wiki/User:Jshflynn/Kleene_Star_is_Linguistic_Structure

Theorem
Let $\Sigma$ be an alphabet.

Let $\Sigma^{*}$ be the Kleene star of $\Sigma$ and $\circ$ denote concatenation.

Then $(\Sigma^{*}, \circ)$ is a linguistic structure.


Proof
As $\Sigma^{*} \subseteq \Sigma^{*}$ we have that $\Sigma^{*}$ is a formal language over $\Sigma$. 

From Kleene Plus is Linguistic Structure we have that $\circ$ is closed on $\Sigma^{*}-\{\lambda \}$.

Including $\lambda$ in the underlying set we have from Empty Word is Two-sided Identity that $\Sigma^{*}$ is closed under $\circ$ and hence $(\Sigma^{*}, \circ)$ is a linguistic structure.

$\blacksquare$





