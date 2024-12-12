# 

Source: https://proofwiki.org/wiki/Factors_in_Absolutely_Convergent_Product_Converge_to_One/Proof_1

Theorem
Let $\struct {\mathbb K, \norm {\, \cdot \,} }$ be a valued field.
Let the infinite product $\ds \prod_{n \mathop = 1}^\infty \paren {1 + a_n}$ be absolutely convergent.

Then:

$a_n \to 0$


Proof
We have that $\ds \prod_{n \mathop = 1}^\infty \paren {1 + a_n}$ is absolutely convergent.
By the definition of absolutely convergent product, $\ds \prod_{n \mathop = 1}^\infty \paren {1 + \size {a_n} }$ is convergent.














\(\ds \prod_{n \mathop = 1}^\infty \paren {1 + \size {a_n} }\)

\(=\)







\(\ds \paren {1 + \size {a_1} } \paren {1 + \size {a_2} } \paren {1 + \size {a_3} } \paren {1 + \size {a_4} } \cdots\)





expanding out the product














\(\ds \)

\(=\)







\(\ds 1 + \paren {\size {a_1} + \size {a_2} + \size {a_3} + \size {a_4} + \cdots} + \paren{\size {a_1} \size {a_2} + \size {a_1} \size {a_3} + \size {a_1} \size {a_4} + \cdots + \size {a_2} \size {a_3} + \size {a_2} \size {a_4} + \cdots} + \paren {\size {a_1} \size {a_2} \size {a_3} + \size {a_1} \size {a_2} \size {a_4} + \cdots + \size {a_2} \size {a_3} \size {a_4} + \cdots} + \cdots\)




















\(\ds \)

\(=\)







\(\ds 1 + \sum_{i \mathop = 1}^\infty \size {a_i} + \sum_{i \mathop = 1}^\infty \sum_{j \mathop = 1}^\infty \size {a_i} \size { a_{i + j} } + \sum_{i \mathop = 1}^\infty \sum_{j \mathop = 1}^\infty \sum_{k \mathop = 1}^\infty \size {a_i} \size { a_{i + j} } \size {a_{i + j + k} } + \cdots\)









From the above, we see that $\ds \prod_{n \mathop = 1}^\infty \paren {1 + \size {a_n} } > \sum_{i \mathop = 1}^\infty \size {a_i}$
And since $\ds \prod_{n \mathop = 1}^\infty \paren {1 + \size {a_n} }$ is convergent, then $\ds \sum_{i \mathop = 1}^\infty \size {a_i}$ is convergent
Hence $\ds \sum_{n \mathop = 1}^\infty a_n$ is absolutely convergent.
By Terms in Convergent Series Converge to Zero:

$a_n \to 0$

$\blacksquare$





