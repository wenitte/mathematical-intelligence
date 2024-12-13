# 

Source: https://proofwiki.org/wiki/Limit_of_Cumulative_Distribution_Function_at_Positive_Infinity/Lemma


Further research is required in order to fill out the details.In particular: See if this is a particular case if a more general theoremYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by finding out more.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Research}} from the code.
Lemma
Let $\sequence {x_n}_{n \mathop \in \N}$ be an increasing with $x_n \to \infty$. 
Then:

$\ds \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} = \R$


Proof
Clearly we have: 

$\ds \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} \subseteq \R$
So we only need to show that: 

$\ds \R \subseteq \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x_n}$

Let $x \in \R$. 
From the definition of a sequence diverging to $\infty$:

there exists $N \in \N$ such that $x_N > x$.
So:

$x \in \hointl {-\infty} {x_N}$
giving:

$\ds x \in \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x_n}$
So:

$\ds \R \subseteq \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x_n}$
from the definition of subset. 

So, we have: 

$\ds \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x_n} = \R$
from the definition of set equality.
$\blacksquare$





