# 

Source: https://proofwiki.org/wiki/Kernel_of_Bounded_Linear_Transformation_is_Closed_Linear_Subspace

Theorem
Let $V, W$ be normed vector spaces.
Let $f: V \to W$ be a bounded linear transformation.

Then $\ker f$, the kernel of $f$, is a closed linear subspace of $V$.


Proof
By Kernel of Linear Transformation is Linear Subspace, $\ker f$ is a subspace of $V$.
By Continuity of Linear Transformations, $f$ is continuous.
Since $\ker f = f^{-1} \sqbrk{ \set{ \mathbf 0_W } }$, it follows from Continuity Defined from Closed Sets that $\ker f$ is closed.
Hence the result by definition of closed linear subspace.
$\blacksquare$





