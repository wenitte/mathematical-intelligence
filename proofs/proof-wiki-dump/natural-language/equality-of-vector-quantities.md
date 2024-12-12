# 

Source: https://proofwiki.org/wiki/Equality_of_Vector_Quantities



Theorem
Two vector quantities are equal if and only if they have the same magnitude and direction.
That is:

$\mathbf a = \mathbf b \iff \paren {\size {\mathbf a} = \size {\mathbf b} \land \hat {\mathbf a} = \hat {\mathbf b} }$
where:

$\hat {\mathbf a}$ denotes the unit vector in the direction of $\mathbf a$
$\size {\mathbf a}$ denotes the magnitude of $\mathbf a$.


Proof
Let $\mathbf a$ and $\mathbf b$ be expressed in component form:














\(\ds \mathbf a\)

\(=\)







\(\ds a_1 \mathbf e_1 + a_2 \mathbf e_2 + \cdots + a_n \mathbf e_n\)




















\(\ds \mathbf b\)

\(=\)







\(\ds b_1 \mathbf e_1 + b_2 \mathbf e_2 + \cdots + b_n \mathbf e_n\)









where $\mathbf e_1, \mathbf e_2, \ldots, \mathbf e_n$ denote the unit vectors in the positive directions of the coordinate axes of the Cartesian coordinate space into which $\mathbf a$ has been embedded.

Thus $\mathbf a$ and $\mathbf b$ can be expressed as:














\(\ds \mathbf a\)

\(=\)







\(\ds \tuple {a_1, a_2, \ldots, a_n}\)




















\(\ds \mathbf b\)

\(=\)







\(\ds \tuple {b_1, b_2, \ldots, b_n}\)










By definition of vector length, we have that:














\(\ds \size {\mathbf a}\)

\(=\)







\(\ds \size {\tuple {a_1, a_2, \ldots, a_n} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\paren {a_1^2 + a_2^2 + \ldots + a_n^2} }\)









and similarly:














\(\ds \size {\mathbf b}\)

\(=\)







\(\ds \size {\tuple {b_1, b_2, \ldots, b_n} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\paren {b_1^2 + b_2^2 + \ldots + b_n^2} }\)










From Vector Quantity as Scalar Product of Unit Vector Quantity, it follows that:














\(\ds \hat {\mathbf a}\)

\(=\)







\(\ds \widehat {\tuple {a_1, a_2, \ldots, a_n} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {\paren {a_1^2 + a_2^2 + \ldots + a_n^2} } } \mathbf a\)









and similarly:














\(\ds \hat {\mathbf b}\)

\(=\)







\(\ds \widehat {\tuple {b_1, b_2, \ldots, b_n} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {\paren {b_1^2 + b_2^2 + \ldots + b_n^2} } } \mathbf b\)











Sufficient condition
Let $\mathbf a = \mathbf b$.
Then by Equality of Ordered Tuples:

$(1): \quad a_1 = b_1, a_2 = b_2, \ldots a_n = b_n$
Then:














\(\ds \size {\mathbf a}\)

\(=\)







\(\ds \sqrt {\paren {a_1^2 + a_2^2 + \ldots + a_n^2} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\paren {b_1^2 + b_2^2 + \ldots + b_n^2} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \size {\mathbf b}\)









and:














\(\ds \hat {\mathbf a}\)

\(=\)







\(\ds \dfrac 1 {\sqrt {\paren {a_1^2 + a_2^2 + \ldots + a_n^2} } } \mathbf a\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {\paren {b_1^2 + b_2^2 + \ldots + b_n^2} } } \mathbf b\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \hat {\mathbf b}\)











Necessary Condition
Let $\size {\mathbf a} = \size {\mathbf b}$, and $\hat {\mathbf a} = \hat {\mathbf b}$.
Then:














\(\ds \mathbf a\)

\(=\)







\(\ds \hat {\mathbf a} \sqrt {\paren {a_1^2 + a_2^2 + \ldots + a_n^2} }\)





from Vector Quantity as Scalar Product of Unit Vector Quantity














\(\ds \)

\(=\)







\(\ds \hat {\mathbf a} \size {\mathbf a}\)





by definition of $\size {\mathbf a}$














\(\ds \)

\(=\)







\(\ds \hat {\mathbf b} \size {\mathbf b}\)





by assumption














\(\ds \)

\(=\)







\(\ds \hat {\mathbf b} \sqrt {\paren {b_1^2 + b_2^2 + \ldots + b_n^2} }\)




















\(\ds \)

\(=\)







\(\ds \mathbf b\)









$\blacksquare$


Sources
1921: C.E. Weatherburn: Elementary Vector Analysis ... (previous) ... (next): Chapter $\text I$. Addition and Subtraction of Vectors. Centroids: Definitions: $3$. Definitions of terms
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text I$: Definitions. Elements of Vector Algebra: $2$. Graphical Representation of Vectors
1961: I.M. Gel'fand: Lectures on Linear Algebra (2nd ed.) ... (previous) ... (next): $\S 1$: $n$-Dimensional vector spaces
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 26$. Vector Spaces and Modules
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: Fundamental Definitions: $1.$




