# 

Source: https://proofwiki.org/wiki/Dot_Product_of_Vector_Cross_Products/Proof_2

Theorem
Let $\mathbf a, \mathbf b, \mathbf c, \mathbf d$ be vectors in a vector space $\mathbf V$ of $3$ dimensions.
Let $\mathbf a \times \mathbf b$ denote the vector cross product of $\mathbf a$ with $\mathbf b$.
Let $\mathbf a \cdot \mathbf b$ denote the dot product of $\mathbf a$ with $\mathbf b$.

Then:

$\paren {\mathbf a \times \mathbf b} \cdot \paren {\mathbf c \times \mathbf d} = \paren {\mathbf a \cdot \mathbf c} \paren {\mathbf b \cdot \mathbf d} - \paren {\mathbf a \cdot \mathbf d} \paren {\mathbf b \cdot \mathbf c}$


Proof
Let $\mathbf a, \mathbf b, \mathbf c, \mathbf d$ be embedded in a Cartesian space:














\(\ds \mathbf a\)

\(=\)







\(\ds a_1 \mathbf e_1 + a_2 \mathbf e_2 + a_3 \mathbf e_3\)




















\(\ds \mathbf b\)

\(=\)







\(\ds b_1 \mathbf e_1 + b_2 \mathbf e_2 + b_3 \mathbf e_3\)




















\(\ds \mathbf c\)

\(=\)







\(\ds c_1 \mathbf e_1 + c_2 \mathbf e_2 + c_3 \mathbf e_3\)




















\(\ds \mathbf d\)

\(=\)







\(\ds d_1 \mathbf e_1 + d_2 \mathbf e_2 + d_3 \mathbf e_3\)









where $\tuple {\mathbf e_1, \mathbf e_2, \mathbf e_3}$ denotes the standard ordered basis of $\mathbf V$.

Then:














\(\ds \paren {\mathbf a \cdot \mathbf c} \paren {\mathbf b \cdot \mathbf d}\)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^3 a_i c_i} \paren {\sum_{j \mathop = 1}^3 b_j d_j}\)





Definition of Dot Product














\(\ds \)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^3 a_i d_i} \paren {\sum_{j \mathop = 1}^3 b_j c_j} + \sum_{1 \mathop \le i \mathop < j \mathop \le 3} \paren {a_i b_j - a_j b_i} \paren {c_i d_j - c_j d_i}\)





Binet-Cauchy Identity














\(\ds \)

\(=\)







\(\ds \paren {\mathbf a \cdot \mathbf d} \paren {\mathbf b \cdot \mathbf c} + \paren {a_1 b_2 - a_2 b_1} \paren {c_1 d_2 - c_2 d_1}\)





Definition of Dot Product and expanding right hand side














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {a_1 b_3 - a_3 b_1} \paren {c_1 d_3 - c_3 d_1}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {a_2 b_3 - a_3 b_2} \paren {c_2 d_3 - c_3 d_2}\)




















\(\ds \)

\(=\)







\(\ds \paren {\mathbf a \cdot \mathbf d} \paren {\mathbf b \cdot \mathbf c} + \paren {a_1 b_2 - a_2 b_1} \paren {c_1 d_2 - c_2 d_1}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {-\paren {a_1 b_3 - a_3 b_1} } \paren {-\paren {c_1 d_3 - c_3 d_1} }\)





two sign changes which cancel each other out














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {a_2 b_3 - a_3 b_2} \paren {c_2 d_3 - c_3 d_2}\)




















\(\ds \)

\(=\)







\(\ds \paren {\mathbf a \cdot \mathbf d} \paren {\mathbf b \cdot \mathbf c} + \paren {a_1 b_2 - a_2 b_1} \paren {c_1 d_2 - c_2 d_1}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {a_3 b_1 - a_1 b_3} \paren {c_3 d_1 - c_1 d_3}\)





rearranging














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {a_2 b_3 - a_3 b_2} \paren {c_2 d_3 - c_3 d_2}\)




















\(\ds \)

\(=\)







\(\ds \paren {\mathbf a \cdot \mathbf d} \paren {\mathbf b \cdot \mathbf c} + \paren {\mathbf a \times \mathbf b} \cdot \paren {\mathbf c \times \mathbf d}\)





Definition of Vector Cross Product



Hence the result.
$\blacksquare$





