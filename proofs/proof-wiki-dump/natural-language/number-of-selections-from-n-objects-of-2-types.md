# 

Source: https://proofwiki.org/wiki/Number_of_Selections_from_n_Objects_of_2_Types

Theorem
Let $S$ be a collection of $n$ objects, consisting of:

$p$ objects of one type
$q$ objects of another type.
The total number $N$ of different non-empty selections from $S$ is given by:

$N = 2^n \paren {p + 1} \paren {q + 1} - 1$


Proof
For each object, we have $2$ choices: whether to select or whether not.
From Cardinality of Power Set of Finite Set, this gives us $2^n$ options.
From the $p$ things of the first type, we may take $0, 1, 2, \ldots, p$ objects.
Hence we have $\paren {p + 1}$ choices.
Similarly, from the $q$ things of the second type, we have $\paren {q + 1}$ choices.
Hence we have $\paren {p + 1}$ choices.
Because the non-empty selection is excluded, this gives:

$N = 2^n \paren {p + 1} \paren {q + 1} - 1$
Hence the result.
$\blacksquare$


The validity of the material on this page is questionable.In particular: I don't understand this. How can the number of selections be more than Cardinality of Power Set of Finite Set? The above is copied verbatim from the book. More thought needed as to exactly what it means.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: Permutations and Combinations: The number of selections from $n$ different things, $p$ similar things of one kind and $q$ similar things of another kind, if any number may be taken




