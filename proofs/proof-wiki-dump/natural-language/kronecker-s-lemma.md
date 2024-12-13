# 

Source: https://proofwiki.org/wiki/Kronecker%27s_Lemma



Theorem
Let $\sequence {x_n}$ be an infinite sequence of real numbers such that:

$\ds \sum_{n \mathop = 1}^\infty x_n = s$
exists and is finite.

Then for $0 < b_1 \le b_2 \le b_3 \le \ldots$ and $b_n \to \infty$: 

$\ds \lim_{n \mathop \to \infty} \frac 1 {b_n} \sum_{k \mathop = 1}^n b_k x_k = 0$


Proof
Let $S_k$ denote the partial sums of the $x$s.
Using Summation by Parts:

$\ds \frac 1 {b_n} \sum_{k \mathop = 1}^n b_k x_k = S_n - \frac 1 {b_n} \sum_{k \mathop = 1}^{n - 1} \paren {b_{k + 1} - b_k} S_k$
Now, pick any $\epsilon \in \R_{>0}$.
Choose $N$ such that $S_k$ is $\epsilon$-close to $s$ for $k > N$.
This can be done, as the sequence $S_k$ converges to $s$.
Then the right hand side is:














\(\ds \)

\(\)







\(\ds S_n - \frac 1 {b_n} \sum_{k \mathop = 1}^{N - 1} \paren {b_{k + 1} - b_k} S_k - \frac 1 {b_n} \sum_{k \mathop = N}^{n - 1} \paren {b_{k + 1} - b_k} S_k\)




















\(\ds \)

\(=\)







\(\ds S_n - \frac 1 {b_n} \sum_{k \mathop = 1}^{N - 1} \paren {b_{k + 1} - b_k} S_k - \frac 1 {b_n} \sum_{k \mathop = N}^{n - 1} \paren {b_{k + 1} - b_k} s - \frac 1 {b_n} \sum_{k \mathop = N}^{n - 1} \paren {b_{k + 1} - b_k} \paren {S_k - s}\)




















\(\ds \)

\(=\)







\(\ds S_n - \frac 1 {b_n} \sum_{k \mathop = 1}^{N - 1} \paren {b_{k + 1} - b_k} S_k - \frac {b_n - b_N} {b_n} s - \frac 1 {b_n} \sum_{k \mathop = N}^{n - 1} \paren {b_{k + 1} - b_k} \paren {S_k - s}\)










Now, let $n \to \infty$.
The first term goes to $s$, which cancels with the third term.
The second term goes to zero (as the sum is a fixed value).
Since the $b$ sequence is increasing, the last term is bounded by $\epsilon \dfrac {b_n - b_N} {b_n} \le \epsilon$.
$\blacksquare$


This article needs to be linked to other articles.In particular: Needs tightening up a bit, linking to existing results, some definitions need doing.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Source of Name
This entry was named for Leopold Kronecker.


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: The lemma as given here is in a significantly different form from how it is presented in this page -- need to work out whether they are equivalent, or in fact different lemmata altogether.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Kronecker's Lemma




