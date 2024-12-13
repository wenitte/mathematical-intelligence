# 

Source: https://proofwiki.org/wiki/Linear_Transformation_from_Finite-Dimensional_Vector_Space_is_Injective_iff_Surjective



Theorem
Let $K$ be a field. 
Let $V$ be a finite dimensional vector space over $K$.
Let $f: V \to V$ be a linear transformation on $V$.

Then $f$ is an injection if and only if $f$ is a surjection.


Proof
Let $n = \dim V$. 
From Vector Space has Basis, there exists a basis: 

$\BB = \set {e_1, \ldots, e_n}$
for $V$. 
Then from Image of Generating Set of Vector Space under Linear Transformation is Generating Set of Image, $f \sqbrk \BB$ is a generating set for $f \sqbrk V$. 


Sufficient Condition
Suppose that $f$ is a surjection. 
Then $f \sqbrk V = V$. 
So $f \sqbrk \BB$ is a generating set for $f \sqbrk V$ of size $n$. 
From Sufficient Conditions for Basis of Finite Dimensional Vector Space, $f \sqbrk \BB$ is therefore a basis for $V$. 
In particular, $\map f {e_1}, \map f {e_2}, \ldots, \map f {e_n}$ are linearly independent.
Now take $x \in V$ such that $\map f x = \mathbf 0_V$ and write: 

$\ds x = \sum_{i \mathop = 1}^n \alpha_i e_i$
for coefficients $\alpha_1, \ldots, \alpha_n \in K$. 
Since $f$ is linear, we have: 

$\ds \mathbf 0_V = \map f x = \sum_{i \mathop = 1}^n \alpha_i \map f {e_i}$
Since $\map f {e_1}, \map f {e_2}, \ldots, \map f {e_n}$ are linearly independent, we have $\alpha_1 = \alpha_2 = \cdots = \alpha_n = 0$. 
Hence $x = 0$. 
So we have $\ker f = \set {\mathbf 0_V}$. 
From Linear Transformation is Injective iff Kernel Contains Only Zero, $f$ is injective.
$\Box$


Necessary Condition
Suppose that $f$ is injective.
From Linear Transformation is Injective iff Kernel Contains Only Zero, $\ker f = \set {\mathbf 0_V}$. 
So if $\alpha_1, \alpha_2, \ldots, \alpha_n \in K$ are such that: 














\(\ds \sum_{i \mathop = 1}^n \alpha_i \map f {e_i}\)

\(=\)







\(\ds f \paren {\sum_{i \mathop = 1}^n \alpha_i e_i}\)





Definition of Linear Transformation














\(\ds \)

\(=\)







\(\ds \mathbf 0_V\)









Then we have:

$\ds \sum_{i \mathop = 1}^n \alpha_i e_i = \mathbf 0_V$
and hence $\alpha_1 = \alpha_2 = \cdots = \alpha_n = 0$ since $e_1, e_2, \ldots, e_n$ is linearly independent. 
So $f \sqbrk \BB$ is a linearly independent set of size $n$. 
So $\map \span {f \sqbrk \BB} = f \sqbrk V$ is a subspace of $V$ of dimension $n$. 
From Dimension of Proper Subspace is Less Than its Superspace, we have $f \sqbrk V = V$. 
So $f$ is surjective.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $5$: Compact spaces: $5.2$: Definition of compactness




