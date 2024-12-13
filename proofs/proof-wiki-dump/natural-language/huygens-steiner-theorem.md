# 

Source: https://proofwiki.org/wiki/Huygens-Steiner_Theorem



Theorem
Let $B$ be a body of mass $M$.
Let $I_0$ be the moment of inertia of $B$ about some axis $A$ through the centre of mass of $B$.
Let $I$ be the moment of inertia of $B$ about another axis $A'$ parallel to $A$.
Then $I_0$ and $I$ are related by:

$I = I_0 + M l^2$
where $l$ is the distance between $A$ and $A'$.


Proof
Without loss of generality, suppose $I$ is oriented along the $z$-axis.
By definition of moment of inertia:

$\ds I = \sum m_j \lambda_j^2$
$\ds I_0 = \sum m_j \lambda_j'^2$
where:

$\lambda_j$ is the position vector to the $j$th particle from the $z$-axis
$\lambda_j'$ is related to $\lambda_j$ by:
$\lambda_j = \lambda_j' + R_\perp$
$R_\perp$ is the perpendicular distance from $A$ to the center of mass of $B$.

This article needs proofreading.In particular: Check that definition of $R_\perp$ -- distance of $B$ from $A$ or $A'$?If you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Therefore:

$\ds I = \sum m_j \lambda_j^2 = \sum m_j \paren {\lambda_j'^2 + 2 \lambda_j' \cdot R_\perp + R_\perp^2}$
The middle term is:

$\ds 2 R_\perp \cdot \sum m_j \lambda_j' = 2 R_\perp \cdot \sum m_j \paren {\lambda_j - R_\perp} = 2 R_\perp \cdot M \paren {R_\perp - R_\perp} = 0$
Thus:

$\ds I = \sum m_j \lambda_j^2 = \sum m_j \paren {\lambda_j'^2 + R_\perp^2} = I_0 + M l^2$
$\blacksquare$


Also known as
The Huygens-Steiner Theorem theorem is also known as the Parallel Axes Theorem.


Also see
Perpendicular Axes Theorem


Source of Name
This entry was named for Christiaan Huygens and Jakob Steiner.


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): parallel axes theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): parallel axes theorem




