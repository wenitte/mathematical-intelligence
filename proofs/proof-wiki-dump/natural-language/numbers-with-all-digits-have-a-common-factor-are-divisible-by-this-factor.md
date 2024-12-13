# 

Source: https://proofwiki.org/wiki/Numbers_with_All_Digits_Have_a_Common_Factor_are_Divisible_by_This_Factor


There is believed to be a mistake here, possibly a typo.In particular: statements are not equivalentYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

It has been suggested that this page be renamed.In particular: samething at least vaguely grammaticalTo discuss this page in more detail, feel free to use the talk page.

This article has been proposed for deletion.In particular: No, on second thoughts, there's really no room in the universe for this sort of unbearable banalityPlease assess the validity of this proposal.To discuss this page in more detail, feel free to use the talk page.
Theorem
A number expressed in decimal notation is divisible by $d$ if all its digits are divisible by $d$.

That is:

$N = \sqbrk {a_0 a_1 a_2 \ldots a_n}_{10} = a_0 + a_1 10 + a_2 10^2 + \cdots + a_n 10^n$ is divisible by $d$
if

$\gcd \set {a_0, a_1, \ldots, a_n}$ is divisible by $d$.

This theorem is in fact true in all base $b$.


Proof
We can find integers $k_0, k_1, \dots, k_n$ such that $a_i = k_i d$ for all $0 \le i \le n$.
Then:














\(\ds \)

\(\)







\(\ds a_0 + a_1 b + a_2 b^2 + \cdots + a_n b^n\)




















\(\ds \)

\(=\)







\(\ds k_0 d + k_1 d b + k_2 d b^2 + \cdots + k_n d b^n\)




















\(\ds \)

\(=\)







\(\ds d \paren {k_0 + k_1 b + k_2 b^2 + \cdots + k_n b^n}\)









Since $k_0 + k_1 b + k_2 b^2 + \cdots + k_n b^n$ is a sum of integers, it is also an integer.
This proves that $a_0 + a_1 10 + a_2 10^2 + \cdots + a_n 10^n$ is divisible by $d$.
$\blacksquare$





