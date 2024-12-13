# 

Source: https://proofwiki.org/wiki/Ordinals_are_Well-Ordered/Proof_1

Theorem
The ordinals are well-ordered.


Proof
Recall that the Ordinals are Totally Ordered.
Let $A$ be a non-empty set of ordinals.
Let $\alpha \in A$.
Let $B = \alpha^+ \cap A$, where $\alpha^+$ denotes the successor set of $\alpha$.
Recall that $\alpha^+$ is an ordinal.
Note that $\alpha \in B$, so $B$ is non-empty.
By Intersection is Subset, $B \subseteq \alpha^+$.
It follows that there exists a smallest element $\kappa$ of $B$.

We claim that $\kappa$ is the smallest element of $A$.
So let $\beta \in A$. We need to show that $\kappa = \beta$ or $\kappa \in \beta$.
By Ordinal Membership is Trichotomy, either $\beta \in \alpha^+$, $\alpha^+ = \beta$, or $\alpha^+ \in \beta$.
If $\beta \in \alpha^+$, then $\beta \in B$; it follows by the definition of $\kappa$ that $\kappa = \beta$ or $\kappa \in \beta$.
If $\alpha^+ = \beta$ or $\alpha^+ \in \beta$, then it follows by the transitivity of $\beta$ that $\alpha^+ \subseteq \beta$.
Since $\kappa \in \alpha^+$, it follows that $\kappa \in \beta$.
$\blacksquare$





