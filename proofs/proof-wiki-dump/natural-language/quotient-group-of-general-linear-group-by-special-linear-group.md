# 

Source: https://proofwiki.org/wiki/Quotient_Group_of_General_Linear_Group_by_Special_Linear_Group

Theorem
Let $\GL {n, \R}$ denote the general linear group of degree $n$ over $\R$.
Let $\SL {n, \R}$ denote the special linear group of degree $n$ over $\R$.

Then the quotient group $\GL {n, \R} / \SL {n, \R}$ is the multiplicative group of real numbers $\struct {\R_{\ne 0}, \times}$.


Proof
Let $\det: \GL {n, \R} \to \struct {\R_{\ne 0}, \times}$ be the group homomorphism:

$\mathbf A \mapsto \map \det {\mathbf A}$
where $\map \det {\mathbf A}$ is the determinant of $\mathbf A$.
This is demonstrated to be a homomorphism in General Linear Group to Determinant is Homomorphism

From the the corollary to General Linear Group to Determinant is Homomorphism, the kernel of $\phi$ is $\SL {n, \R}$.
Thus from Kernel is Normal Subgroup of Domain, $\SL {n, \R}$ is normal in $\GL {n, \R}$.

From the First Isomorphism Theorem for Groups:

$\Img \phi \cong \GL {n, \R} / \SL {n, \R}$
By definition, the image of $\phi$ is the multiplicative group of real numbers.
Hence the result.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 52$. The first isomorphism theorem




