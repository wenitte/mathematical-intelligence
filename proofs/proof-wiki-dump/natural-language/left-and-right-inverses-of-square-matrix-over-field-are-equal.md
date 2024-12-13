# 

Source: https://proofwiki.org/wiki/Left_and_Right_Inverses_of_Square_Matrix_over_Field_are_Equal


It has been suggested that this page or section be merged into Left or Right Inverse of Matrix is Inverse.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $\Bbb F$ be a field, usually one of the standard number fields $\Q$, $\R$ or $\C$.
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $\map \MM n$ denote the matrix space of order $n$ square matrices over $\Bbb F$.

Let $\mathbf B$ be a left inverse matrix of $\mathbf A$.
Then $\mathbf B$ is also a right inverse matrix of $\mathbf A$.

Similarly, let $\mathbf B$ be a right inverse matrix of $\mathbf A$.
Then $\mathbf B$ is also a right inverse matrix of $\mathbf A$.


Proof
Consider the algebraic structure $\struct {\map \MM {m, n}, +, \circ}$, where:

$+$ denotes matrix entrywise addition
$\circ$ denotes (conventional) matrix multiplication.
From Ring of Square Matrices over Field is Ring with Unity, $\struct {\map \MM {m, n}, +, \circ}$ is a ring with unity.
Hence a fortiori $\struct {\map \MM {m, n}, +, \circ}$ is a monoid.
The result follows directly from Left Inverse and Right Inverse is Inverse.
$\blacksquare$


There is believed to be a mistake here, possibly a typo.In particular: That's not what it actually says. What the above link says is that if $\mathbf A$ has both a right inverse matrix and a left inverse matrix, then those are equal and can be called an inverse matrix. It does not say that if $\mathbf B$ is a left inverse matrix then it is automatically a right inverse matrix. I'll sort this out when I get to exercise $1.15$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1998: Richard Kaye and Robert Wilson: Linear Algebra ... (previous) ... (next): Part $\text I$: Matrices and vector spaces: $1$ Matrices: $1.3$ The inverse of a matrix: Fact $1.1$




