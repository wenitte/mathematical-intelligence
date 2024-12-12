# 

Source: https://proofwiki.org/wiki/Borel-Cantelli_Lemma_10_to_Kochen-Stone_Theorem


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

It has been suggested that this page be renamed.In particular: Sorry, still needs a rename. I'm not sure this is Lemma $10$. Does anyone have a good link to the whole thing? I think this is worth a project.To discuss this page in more detail, feel free to use the talk page.
Theorem
Let $A_n$ be a sequence of events with $\ds \sum \map \Pr {A_n} = \infty$ and:

$\ds \liminf_{k \mathop \to \infty} \frac {\ds \sum_{1 \mathop \le m, n \mathop \le k} \map \Pr {A_n \cap A_m} } {\ds \paren {\sum_{n \mathop = 1}^k \map \Pr {A_n} }^2} < \infty$
Then there is a positive probability that $A_n$ occur infinitely often.


Proof
Fix $\ell < k$.
Let $\ds X = \sum_{n \mathop = \ell}^k 1_{A_n}$.
It follows that:

$\ds \expect X = \sum_{n \mathop = \ell}^k \Pr(A_n)$
and:

$\ds \expect {X^2} = \sum_{\ell \mathop \le m, n \mathop \le k} \map \Pr {A_n \cap A_m}$
Using the Paley-Zygmund Inequality for $\theta = 0$, we obtain:














\(\ds \map \Pr {\bigcup_{n \mathop = \ell}^k A_n}\)

\(=\)







\(\ds \map \Pr {X > 0}\)




















\(\ds \)

\(\ge\)







\(\ds \frac {\ds \paren {\sum_{n \mathop = \ell}^k \map \Pr {A_n} }^2} {\ds \sum_{\ell \mathop \le m, n \mathop \le k} \map \Pr {A_n \cap A_m} }\)




















\(\ds \)

\(\ge\)







\(\ds \frac {\ds \paren {\sum_{n \mathop = 1}^k \map \Pr {A_n} - \sum_{n \mathop = 1}^{\ell - 1} \map \Pr {A_n} }^2} {\ds \sum_{1 \mathop \le m, n \mathop \le k} \map \Pr {A_n \cap A_m} - \sum_{1 \mathop \le m, n \mathop < \ell} \map \Pr {A_n \cap A_m} }\)









Now, it holds that:

$\ds \map \Pr {A_n \text { occurs i.o.} } = \lim_{\ell \mathop \to \infty} \lim_{k \mathop \to \infty} \map \Pr {\bigcup_{n \mathop = \ell}^k A_n}$
We have:

$\ds \frac {\ds \paren {\sum_{n \mathop = 1}^k \map \Pr {A_n} - \sum_{n \mathop = 1}^{\ell - 1} \map \Pr {A_n} }^2} {\ds \sum_{1 \mathop \le m, n \mathop \le k} \map \Pr {A_n \cap A_m} - \sum_{1 \mathop \le m, n \mathop < \ell} \map \Pr {A_n \cap A_m} } \ge \frac {\ds \left(\sum_{n \mathop = 1}^k \map \Pr {A_n} - \sum_{n \mathop = 1}^{\ell - 1} \Pr (A_n)\right)^2} {\ds \sum_{1 \mathop \le m, n \mathop \le k} \map \Pr {A_n \cap A_m} }$
Fix $l \in \N_1$.
Since $\ds \lim_{k \mathop \to \infty}\sum_{n \mathop = 1}^k \map \Pr {A_n} = \infty$, by assumption, if $k$ is sufficiently large:

$\ds \paren {\sum_{n \mathop = 1}^ k \map \Pr {A_n} - \sum_{n \mathop = 1}^{\ell - 1} \map \Pr {A_n} }^2 \approx \paren {\sum_{n \mathop = 1}^k \map \Pr {A_n} }^2$
So if $k$ is sufficiently large:

$\ds \frac {\ds \paren {\sum_{n \mathop = 1}^k \map \Pr {A_n} - \sum_{n \mathop = 1}^{\ell - 1} \map \Pr {A_n} }^2} {\ds \sum_{1 \mathop \le m, n \mathop \le k} \map \Pr {A_n \cap A_m} } \approx \frac {\ds \paren {\sum_{n \mathop = 1}^k \map \Pr {A_n} }^2} {\ds \sum_{1 \mathop \le m, n \mathop \le k} \map \Pr {A_n \cap A_m} } = \frac 1 {\frac {\ds \sum_{1 \mathop \le m, n \mathop \le k} \map \Pr {A_n \cap A_m} } {\ds \paren {\sum_{n \mathop = 1}^k \map \Pr {A_n} }^2} }$
Suppose:

$\ds \liminf_{k \mathop \to \infty} \frac {\ds \sum_{1 \mathop \le m, n \mathop \le k} \map \Pr {A_n \cap A_m} } {\ds \paren {\sum_{n \mathop = 1}^k \map \Pr {A_n} }^2} = c < \infty$
This means that no matter how large $k$ is, there is always some $k' \ge k$, such that:

$\ds \frac {\ds \sum_{1 \mathop \le m, n \mathop \le k'} \map \Pr {A_n \cap A_m} } {\ds \paren {\sum_{n \mathop = 1}^{k'} \map \Pr {A_n} }^2} \approx c$
So for infinitely many $k$s:

$\ds \map \Pr {\bigcup_{n \mathop = \ell}^k A_n} \ge \frac 1 {\frac {\ds \sum_{1 \mathop \le m, n \mathop \le k} \map \Pr {A_n \cap A_m} } {\paren {\ds \sum_{n \mathop = 1}^k \map \Pr {A_n} }^2} } \approx \frac 1 c$
Since $\ds \map \Pr {\bigcup_{n \mathop = \ell}^k A_n}$ is decreasing in $k$, we have, approximately:

$\ds \lim_{k \mathop \to \infty} \map \Pr {\bigcup_{n \mathop = \ell}^k A_n} \ge \frac 1 c$
Since $l$ was arbitrary:

$\ds \lim_{l \mathop \to \infty} \lim_{k \mathop \to \infty} \map \Pr {\bigcup_{n \mathop = \ell}^k A_n} \ge \frac 1 c > 0$
$\blacksquare$


Source of Name
This entry was named for Émile Borel and Francesco Paolo Cantelli.





