# 

Source: https://proofwiki.org/wiki/Cartesian_Metric_is_Rotation_Invariant


It has been suggested that this page or section be merged into Euclidean Metric on Real Number Plane is Rotation Invariant.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
The cartesian metric does not change under rotation.


Proof
Let the cartesian metric be $\delta_{ij} = \innerprod {e_i} {e_j}$.
Also, let $\delta_{ij}'$ be the metric of the coordinate system of $\delta_{ij}$ rotated by a rotation matrix $A$.
Then, $\delta_{ij}' = \innerprod {A e_i} {A e_j}$.
$\innerprod {A x} y = \innerprod x {A^T y}$, see Factor Matrix in the Inner Product, so
$\delta_{ij}' = \innerprod {A e_i} {A e_j} = \innerprod {e_i} {A^T A e_j}$.
For rotation matrices, we have $A^T = A^{-1}$, so $\delta_{ij}'$ reduces to:

$\delta_{ij}' = \innerprod {e_i} {A^T A e_j} = \innerprod {e_i} {A^{-1} A e_j} = \innerprod {e_i} {I e_j} = \innerprod {e_i} {e_j}$
where $I$ is the unit matrix.
Thus:

$\delta_{ij}' = \delta_{ij}$
The result follows.
$\blacksquare$


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.



This page or section has statements made on it that ought to be extracted and proved in a Theorem page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
This proof holds for any finite-dimensional Euclidean space.





