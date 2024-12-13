# 

Source: https://proofwiki.org/wiki/Product_of_Sums

Theorem
Let $\ds \sum_{n \mathop \in A} a_n$ and $\ds \sum_{n \mathop \in B} b_n$ be absolutely convergent sequences.
Then:

$\ds \paren {\sum_{i \mathop \in A} a_i} \paren {\sum_{j \mathop \in B} b_j} = \sum_{\tuple {i, j} \mathop \in A \times B} a_i b_j$


Corollary
Let $\ds \sum_{i \mathop \in X} a_{i j}$ be absolutely convergent sequences for all $j \in Y$.
Then:

$\ds \prod_{j \mathop \in Y} \paren {\sum_{i \mathop \in X} a_{i j} } = \sum_{f \mathop: Y \mathop \to X} \paren {\prod_{j \mathop \in Y} a_{\map f j j} }$
where $f$ runs over all mappings from $Y$ to $X$.


Proof
We have that both series are absolutely convergent.
Thus by Manipulation of Absolutely Convergent Series, it is permitted to expand the product as:

$\ds \paren {\sum_{i \mathop \in A} a_i} \paren {\sum_{j \mathop \in B} b_j} = \sum_{i \mathop \in A} \paren {a_i \sum_{j \mathop \in B} b_j}$
But since $a_i$ is a constant, it may be brought into the summation, to obtain:

$\ds \sum_{i \mathop \in A} \sum_{j \mathop \in B} a_i b_j$
Hence the result.
$\blacksquare$





