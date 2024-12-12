# 

Source: https://proofwiki.org/wiki/Factors_in_Absolutely_Convergent_Product_Converge_to_One



Theorem
Let $\struct {\mathbb K, \norm {\, \cdot \,} }$ be a valued field.
Let the infinite product $\ds \prod_{n \mathop = 1}^\infty \paren {1 + a_n}$ be absolutely convergent.

Then:

$a_n \to 0$


Proof 1
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


Proof 2
We have that $\ds \prod_{n \mathop = 1}^\infty \paren {1 + a_n}$ is absolutely convergent.
Let $b_n = \paren {1 + a_n}$
Then $\ds \prod_{n \mathop = 1}^\infty b_n$ is absolutely convergent.
From Absolutely Convergent Product is Convergent, $\ds \prod_{n \mathop = 1}^\infty b_n$ is convergent.
By Factors in Convergent Product Converge to One:

$b_n \to 1$
Thus:

$a_n \to 0$
$\blacksquare$


Also see
Factors in Convergent Product Converge to One
Absolutely Convergent Product is Convergent (which relies on this result)

There is believed to be a mistake here, possibly a typo.In particular: I'm puzzled about this. This result, or at least Proof $2$, relies on Absolutely Convergent Product is Convergent, not the other way round.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




