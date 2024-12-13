# 

Source: https://proofwiki.org/wiki/Quaternion_Multiplication

Theorem
Let $\mathbf x_1 = a_1 \mathbf 1 + b_1 \mathbf i + c_1 \mathbf j + d_1 \mathbf k$ and $\mathbf x_2 = a_2 \mathbf 1 + b_2 \mathbf i + c_2 \mathbf j + d_2 \mathbf k$ be quaternions.

Then their product is given by:








\(\ds \mathbf x_1 \mathbf x_2 \ \ \)





\(\ds =\)

\(\)







\(\ds \left({a_1 a_2 - b_1 b_2 - c_1 c_2 - d_1 d_2}\right) \mathbf 1\)




















\(\ds \)

\(+\)







\(\ds \left({a_1 b_2 + b_1 a_2 + c_1 d_2 - d_1 c_2}\right) \mathbf i\)




















\(\ds \)

\(+\)







\(\ds \left({a_1 c_2 - b_1 d_2 + c_1 a_2 + d_1 b_2}\right) \mathbf j\)




















\(\ds \)

\(+\)







\(\ds \left({a_1 d_2 + b_1 c_2 - c_1 b_2 + d_1 a_2}\right) \mathbf k\)











Proof
From Matrix Form of Quaternion we have that:

$\mathbf x_1 \mathbf x_2 = \begin{bmatrix} a_1 + b_1 i & c_1 + d_1 i \\ -c_1 + d_1 i & a_1 - b_1 i \end{bmatrix} \begin{bmatrix} a_2 + b_2 i & c_2 + d_2 i \\ -c_2 + d_2 i & a_2 - b_2 i \end{bmatrix}$

Let $\mathbf x_1 \mathbf x_2 = \begin{bmatrix} p_{11} & p_{12} \\ p_{21} & p_{22} \end{bmatrix} = \begin{bmatrix} a + b i & c + d i \\ -c + d i & a - b i \end{bmatrix}$.
Throughout we use the definition of conventional matrix product.
So:














\(\ds p_{11}\)

\(=\)







\(\ds \left({a_1 + b_1 i}\right) \left({a_2 + b_2 i}\right) + \left({c_1 + d_1 i}\right) \left({-c_2 + d_2 i}\right)\)




















\(\ds \)

\(=\)







\(\ds a_1 a_2 + b_1 a_2 i + a_1 b_2 i + b_1 b_2 i^2 - c_1 c_2 - d_1 c_2 i + c_1 d_2 i + d_1 d_2 i^2\)




















\(\ds \)

\(=\)







\(\ds \left({a_1 a_2 - b_1 b_2 - c_1 c_2 - d_1 d_2}\right) + \left({a_1 b_2 + b_1 a_2 + c_1 d_2 - d_1 c_2}\right) i\)




















\(\ds \)

\(=\)







\(\ds a + b i\)
























\(\ds p_{12}\)

\(=\)







\(\ds \left({a_1 + b_1 i}\right) \left({c_2 + d_2 i}\right) + \left({c_1 + d_1 i}\right) \left({a_2 - b_2 i}\right)\)




















\(\ds \)

\(=\)







\(\ds a_1 c_2 + b_1 c_2 i + a_1 d_2 i + b_1 d_2 i^2 + c_1 a_2 + d_1 a_2 i - c_1 b_2 i - d_1 b_2 i^2\)




















\(\ds \)

\(=\)







\(\ds \left({a_1 c_2 - b_1 d_2 + c_1 a_2 + d_1 b_2}\right) + \left({a_1 d_2 + b_1 c_2 - c_1 b_2 + d_1 a_2}\right) i\)




















\(\ds \)

\(=\)







\(\ds c + d i\)
























\(\ds p_{21}\)

\(=\)







\(\ds \left({-c_1 + d_1 i}\right) \left({a_2 + b_2 i}\right) + \left({a_1 - b_1 i}\right) \left({-c_2 + d_2 i}\right)\)




















\(\ds \)

\(=\)







\(\ds -c_1 a_2 + d_1 a_2 i - c_1 b_2 i + d_1 b_2 i^2 - a_1 c_2 + b_1 c_2 i + a_1 d_2 i - b_1 d_2 i^2\)




















\(\ds \)

\(=\)







\(\ds -\left({a_1 c_2 - b_1 d_2 + c_1 a_2 + d_1 b_2}\right) + \left({a_1 d_2 + b_1 c_2 - c_1 b_2 + d_1 a_2}\right) i\)




















\(\ds \)

\(=\)







\(\ds -c + d i\)
























\(\ds p_{22}\)

\(=\)







\(\ds \left({-c_1 + d_1 i}\right) \left({c_2 + d_2 i}\right) + \left({a_1 - b_1 i}\right) \left({a_2 - b_2 i}\right)\)




















\(\ds \)

\(=\)







\(\ds -c_1 c_2 + d_1 c_2 i - c_1 d_2 i + d_1 d_2 i^2 + a_1 a_2 - b_1 a_2 i - a_1 b_2 i + b_1 b_2 i^2\)




















\(\ds \)

\(=\)







\(\ds \left({a_1 a_2 - b_1 b_2 - c_1 c_2 - d_1 d_2}\right) - \left({a_1 b_2 + b_1 a_2 + c_1 d_2 - d_1 c_2}\right) i\)




















\(\ds \)

\(=\)







\(\ds a - b i\)










Hence the result from Matrix Form of Quaternion.
$\blacksquare$





