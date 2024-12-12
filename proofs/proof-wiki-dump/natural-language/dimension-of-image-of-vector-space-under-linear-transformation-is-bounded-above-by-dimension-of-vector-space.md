# 

Source: https://proofwiki.org/wiki/Dimension_of_Image_of_Vector_Space_under_Linear_Transformation_is_Bounded_Above_by_Dimension_of_Vector_Space

Theorem
Let $K$ be a field.
Let $X$ be a vector space over $K$. 
Let $T : X \to Y$ be a linear transformation.

Then: 

$\dim T \sqbrk X \le \dim X$


Proof
From Vector Space has Basis, there exists a basis $\BB$ for $X$.
By Image of Generating Set of Vector Space under Linear Transformation is Generating Set of Image, $T \sqbrk \BB$ is a generator for $T \sqbrk X$.
From Generator of Vector Space Contains Basis, there exists a basis $\BB'$ for $T \sqbrk X$ such that $\BB' \subseteq T \sqbrk \BB$.
From Cardinality of Image of Mapping not greater than Cardinality of Domain, we have $\card {T \sqbrk \BB} \le \card \BB$. 
Also, since $\BB' \subseteq T \sqbrk \BB$, we have: 

$\card {\BB'} \le \card {T \sqbrk \BB}$
Since $\BB'$ is a basis for $T \sqbrk X$, we have: 

$\card {\BB'} = \dim T \sqbrk X$
and since $\BB$ is a basis for $X$ we have: 

$\card \BB = \dim X$
So we obtain: 














\(\ds \dim T \sqbrk X\)

\(=\)







\(\ds \card {\BB'}\)




















\(\ds \)

\(\le\)







\(\ds \card {T \sqbrk \BB}\)




















\(\ds \)

\(\le\)







\(\ds \card \BB\)




















\(\ds \)

\(=\)







\(\ds \dim X\)









$\blacksquare$





