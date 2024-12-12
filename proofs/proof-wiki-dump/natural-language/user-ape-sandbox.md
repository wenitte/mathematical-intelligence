# 

Source: https://proofwiki.org/wiki/User:Ape/Sandbox

Let's try to write another proof of the Abel's Lemma.


Abel's Lemma
Let $(a_n)$ and $(b_n)$ be two sequences where $(a_n)$ is a sequence of $\mathbb{K}=\mathbb{R}$ or $\mathbb{C}$ and $(b_n)$ is a sequence of a normed vector space on $\mathbb{K}$. 
Let $B_n = \ds \sum_{k=0}^n b_k$.
Then, for $n \geqslant 0$, 
$\ds \sum_{k=0}^n a_kb_k = \sum_{k=0}^{n-1} (a_k - a_{k+1}) B_k + a_nB_n$

Proof
First, note that : $b_k = B_k - B_{k-1}$.
Hence : 
$\ds \sum_{k=0}^n a_kb_k = \sum_{k=0}^n a_k (B_k - B_{k-1}) = \sum_{k=0}^n a_kB_k - \sum_{k=0}^n a_kB_{k-1}$
Then, substitute $k$ for $i=k-1$ in the second sum so that :
$\ds \sum_{k=0}^n a_kB_{k-1} =\sum_{i=0}^{n-1} a_{i+1} B_i = \sum_{k=0}^{n-1} a_{k+1} B_k$
So far, we have :
$\ds \sum_{k=0}^n a_kb_k = \sum_{k=0}^n a_kB_k - \sum_{k=0}^{n-1} a_{k+1} B_k = \sum_{k=0}^{n-1} (a_k-a_{k+1})B_k + a_nB_n$ 
$\blacksquare$





