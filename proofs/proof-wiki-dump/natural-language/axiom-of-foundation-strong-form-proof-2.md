# 

Source: https://proofwiki.org/wiki/Axiom_of_Foundation_(Strong_Form)/Proof_2


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $B$ be a class.
Suppose $B$ is non-empty.

Then $B$ has a strictly minimal element under $\in$.


Proof
 This page is beyond the scope of ZFC, and should not be used in anything other than the theory in which it resides.
If you see any proofs that link to this page, please insert this template at the top.
If you believe that the contents of this page can be reworked to allow ZFC, then you can discuss it at the talk page.

Let $x \in B$.
Let $x'$ be the transitive closure of $x$.
Let $L = x' \cap B$.
Then $x \in L$, so $L$ is not empty.
Since $x'$ is a set, so is $L$, by the axiom of subset.
Thus by the Axiom of Foundation, $L$ has an $\in$-minimal element $m$.
By the definition of intersection, $m \in B$.
Aiming for a contradiction, suppose that there is an element $b \in B$ such that $b \in m$.
Then since $m \in x'$ and $x'$ is transitive, $b \in x'$.
Thus $b \in L$, contradicting the minimality of $m$.
So $m$ is an $\in$-minimal element of $B$.
$\blacksquare$





