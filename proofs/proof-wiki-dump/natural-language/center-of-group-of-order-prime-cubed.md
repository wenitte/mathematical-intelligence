# 

Source: https://proofwiki.org/wiki/Center_of_Group_of_Order_Prime_Cubed

Theorem
Let $G$ be a group of order $p^3$, where $p$ is a prime.
Let $\map Z G$ be the center of $G$.

Then $\order {\map Z G} \ne p^2$.


Proof
Aiming for a contradiction, suppose $\order {\map Z G} = p^2$.
Then $\order {G / \map Z G} = p$.
From Prime Group is Cyclic it follows that $G / \map Z G$ is cyclic.
From Quotient of Group by Center Cyclic implies Abelian it follows that $G$ is abelian.
by definition of abelian group it follows that $\order {\map Z G} = p^3$.
The result follows by Proof by Contradiction.
$\blacksquare$


This article is complete as far as it goes, but it could do with expansion.In particular: This results generalizes naturally to a group of order $p^n$: its center is not of order $p^{n-1}$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




