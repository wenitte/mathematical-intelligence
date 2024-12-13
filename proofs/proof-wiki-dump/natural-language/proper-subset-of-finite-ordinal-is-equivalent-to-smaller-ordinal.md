# 

Source: https://proofwiki.org/wiki/Proper_Subset_of_Finite_Ordinal_is_Equivalent_to_Smaller_Ordinal



Theorem
Let $n$ be a finite ordinal.
Let $x \subsetneq n$.

Then for some finite ordinal $m < n$:

$m \sim x$
where $m \sim x$ denotes that $m$ is (set) equivalent to $x$.

That is, every proper subset of a finite ordinal $n$ is equivalent to some finite ordinal smaller than $n$.


Proof
Proof by induction:
For all finite ordinals $n$, let $\map P n$ be the proposition:

$x \subsetneq n \implies \exists m \in \N: m < n: m \sim x$

$\map P 0$ is vacuously true, as there are no proper subsets of $0 = \O$.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k^+}$ is true.

So this is our induction hypothesis:

$x \subsetneq k \implies \exists m \in \N: m < k: m \sim x$

Then we need to show:

$x \subsetneq k^+ \implies \exists m \in \N: m < k^+: m \sim x$


Induction Step
This is our induction step:
Let $x \subsetneq k^+$.
Then either:

$(1) \quad x \subsetneq k$, in which case the induction hypothesis applies
or:

$(2) \quad x = k$, in which case the result is trivially true
or:

$(3) \quad k \in x$.
In case $(3)$, we find a finite ordinal $j \in k$ such that $j \notin x$.
Then we define a mapping $f$ on $x$ as:

$\forall i \in x: \map f i = \begin {cases}
i & : i \ne k \\
j & : i = k
\end {cases}$
Clearly $f$ is injective and $f$ maps $x$ into $k$.


The validity of the material on this page is questionable.In particular: mapping should be defined somehow differently in order to show explicitly that x is equivalent to some element of kYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
So the image of $x$ under $f$ is either equal to $k$  or by the induction hypothesis equivalent to some element of $k$.
Consequently, $x$ is always equivalent to some element of $k$.

So $\map P k \implies \map P {k^+}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N: x \subsetneq n \implies \exists m \in \N: m < n: m \sim x$
$\blacksquare$


Also see
No Bijection between Finite Set and Proper Subset


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 13$: Arithmetic




