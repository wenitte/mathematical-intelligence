# 

Source: https://proofwiki.org/wiki/Method_of_Infinite_Descent



Theorem

There is believed to be a mistake here, possibly a typo.In particular: This technique only works if you can prove that there exists some $n_\gamma$ such that $0 \le n_\gamma < n_\alpha$ for which $\map P {n_\gamma}$ does not work. Otherwise, technically speaking, the proof by Fermat in the historical note is not actually an example of this proof technique. I challenge the student to come up with a proof which genuinely uses the technique as presented here, because I am not sure that it makes logical sense.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $\map P {n_\alpha}$ be a propositional function depending on $n_\alpha \in \N$.
Let $\map P {n_\alpha} \implies \map P {n_\beta}$ such that $0 < n_\beta < n_\alpha$.

Then we may deduce that $\map P n$ is false for all $n \in \N$.
That is, suppose that by assuming the truth of $\map P {n_\alpha}$ for any natural number $n_\alpha$, we may deduce that there always exists some number $n_\beta$ strictly less than $n_\alpha$ for which $\map P {n_\beta}$ is also true, then $\map P {n_\alpha}$ cannot be true after all.

This technique is known as the method of infinite descent.

The process of deducing the truth of $\map P {n_\beta}$ from $\map P {n_\alpha}$ such that $0 < n_\beta < n_\alpha$ is known as the descent step.


Proof 1
Let $G$ be the set of all $n$ such that $\map P n$ hold.
That is:

$G = \set {n \in \N : \map P n}$
Aiming for a contradiction, suppose suppose that $G$ is non-empty.
By the Well-Ordering Principle $G$ contains a smallest element $n_\alpha$.
But by the descent step, there exists $n_\beta \in \N$ that strictly precedes $n_\alpha$ for which $\map P {n_\beta}$.
But then $n_\beta \in G$, which contradicts $n_\alpha$ being the smallest element.
Therefore $G$ is empty.
That is $\map P n$ is false for every $n$.
$\blacksquare$


Proof 2
Suppose that $\map P {n_\alpha}$ holds.
Then from the descent step, $\exists n_\beta \in \N_{n_\alpha}: \map P {n_\beta}$.
The descent step then tell us we can deduce a smaller positive solution, $n_\gamma$, such that $\map P {n_\gamma}$ is true and $n_\gamma \in \N_{n_\beta}$.
And again, the descent step tells us we can deduce a still smaller positive solution, $n_\delta$, such that $\map P {n_\delta}$ is true and $n_\delta \in \N_{n_\gamma}$.

Now, consider the unending sequence: $n_\alpha > n_\beta > n_\gamma > n_\delta > \cdots > 0$.
The set $S = \set {n_\alpha, n_\beta, n_\gamma, n_\delta, \ldots}$ is not bounded below, as for any $\forall x \in S: \exists y \in S: y < x$.
By the Well-Ordering Principle, any non-empty subset of $\N$ must have a least element.
As $S$ is not bounded below, it has no least element, so must be empty.
$\blacksquare$


Historical Note
The Method of Infinite Descent was devised by Pierre de Fermat.
He used it to develop his proof of Fermat's Two Squares Theorem, as he describes in a letter to Pierre de Carcavi:

For a long time I was unable to apply  my method to affirmative proposition, because the twist and the trick for getting at them is much more troublesome than that which I use for negative propositions. Thus, when I had to prove that every prime number which exceeds a multiple of $4$ by $1$ is composed of two squares, I found myself in a fine torment. But at last a meditation many times repeated gave me the light I lacked, and now affirmative propositions submit to my method, with the aid of certain new principles which necessarily must be adjoined to it. The course of my reasoning in affirmative propositions is such: if an arbitrarily chosen prime of the form $4 n + 1$ is not a sum of two squares, [I prove that] there will be another of the same nature, less than the one chosen, and [therefore] next a third still less, and so on. Making an infinite descent in this way we finally arrive at the number $5$, the least of all the numbers of this kind [$4 n + 1$]. [By the proof mentioned and the previous argument from it], it follows that $5$ is not a sum of two squares. But it is. Therefore we must infer by a reductio ad absurdum that all numbers of the form $4 n + 1$ are sums of two squares.


Sources
1937: Eric Temple Bell: Men of Mathematics ... (previous) ... (next): Chapter $\text{IV}$: The Prince of Amateurs




