# 

Source: https://proofwiki.org/wiki/Linear_Subspaces_Closed_under_Setwise_Addition

Theorem
Let $V$ be a $K$-vector space.
Let $M, N$ be linear subspaces of $V$.

Then $L := M + N$ is also a linear subspace of $V$, where $+$ denotes setwise addition.


Proof
It needs to be demonstrated that $L$ is closed under $+$ and $\circ$.

So let $m_1 + n_1, m_2 + n_2 \in L$.
Then $\paren {m_1 + n_1} + \paren {m_2 + n_2} = \paren {m_1 + m_2} + \paren {n_1 + n_2} \in L$.
It follows that $L$ is closed under $+$.

Now let $\lambda \in K, m + n \in L$.
Then $\lambda \circ \paren {m + n} = \paren {\lambda \circ m} + \paren {\lambda \circ n} \in L$.
It follows that $L$ is closed under $\circ$.

Hence the result, by definition of linear subspace.
$\blacksquare$





