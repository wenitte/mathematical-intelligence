# 

Source: https://proofwiki.org/wiki/Classification_of_Compact_One-Manifolds/Lemma_1


This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Lemma for Classification of Compact One-Manifolds
Let $f$ be a function on $\closedint a b$ that is smooth and has a positive derivative everywhere except one interior point, $c$.
Then there exists a globally smooth function $g$ that agrees with $f$ near $a$ and $b$ and has a positive derivative everywhere.


Proof
Let $r$ be a smooth nonnegative function that vanishes outside a compact subset of $\openint a b$, which equals $1$ near $c$, which satisfies:

$\ds \int_a^b r = 1$
Define:

$\ds \map g x = \map f a + \int_a^x \paren {k \map r s + \map {f'} s \paren {1 - \map r s} } \rd s$
where the constant:

$\ds k = \map f b = - \map f a - \int_a^b \map {f'} s \paren {1 - \map r s} \d s$

This article, or a section of it, needs explaining.In particular: why this function $g$ satisfies the given criteriaYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.




