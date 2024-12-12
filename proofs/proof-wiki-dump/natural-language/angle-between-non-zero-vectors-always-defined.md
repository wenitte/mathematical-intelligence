# 

Source: https://proofwiki.org/wiki/Angle_Between_Non-Zero_Vectors_Always_Defined



Theorem
Let $\mathbf v$ and $\mathbf w$ be non-zero vectors in real Euclidean space $\R^n$.
Then the angle between $\mathbf v$ and $\mathbf w$ is always defined.


Proof
Case 1
Suppose that $\mathbf v$ and $\mathbf w$ are not scalar multiples of each other.


From Construction of Triangle from Given Lengths, it is sufficient to show that sum of the lengths of any two sides is greater than the third side.
Consider the side with length $\norm {\mathbf v}$.
From the triangle inequality for vectors:














\(\ds \norm {\mathbf v}\)

\(=\)







\(\ds \norm {\mathbf {w + v - w} }\)




















\(\ds \)

\(<\)







\(\ds \norm {\mathbf w} + \norm {\mathbf {v - w} }\)









Note that the equality is a strict inequality because the vectors are not scalar multiples of each other.


This article, or a section of it, needs explaining.In particular: Pick a better way to explain this than linking to the aboveYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Consider the side with length $\norm {\mathbf w}$.














\(\ds \norm {\mathbf w}\)

\(=\)







\(\ds \norm {\mathbf {v + w - v} }\)




















\(\ds \)

\(<\)







\(\ds \norm {\mathbf v} + \norm {\mathbf {w - v} }\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf v} + \norm {\mathbf {v - w} }\)









Lastly, Consider the side with length $\norm {\mathbf v - \mathbf w}$.














\(\ds \norm {\mathbf {v - w} }\)

\(=\)







\(\ds \norm {\mathbf {v + \paren {-w} } }\)




















\(\ds \)

\(<\)







\(\ds \norm {\mathbf v} + \norm {\mathbf {-w} }\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf v} + \norm {\mathbf w}\)









$\Box$


Case 2
Suppose that $\mathbf v$ and $\mathbf w$ are scalar multiples of each other.
Then the existence of $\theta$ follows directly from the definition of the angle between vectors that are scalar multiples of each other.


This article, or a section of it, needs explaining.In particular: Link to the above definition, or word it here.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


Sources
For a video presentation of the contents of this page, visit the Khan Academy.




