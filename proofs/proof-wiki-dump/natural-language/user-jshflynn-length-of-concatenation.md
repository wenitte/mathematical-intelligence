# 

Source: https://proofwiki.org/wiki/User:Jshflynn/Length_of_Concatenation

Theorem
Let $\Sigma$ be an alphabet.

Let $x$ and $y$ be words over $\Sigma$ and let $\circ$ denote concatenation. 

Then $\operatorname{len}\left({x \circ y}\right) = \operatorname{len}(x) + \operatorname{len}(y)$.


Proof
If $x=\lambda$ or $y=\lambda$ then the result follows immediately from the definition of concatenation with the empty word and the definition of word length. 

Otherwise, from the definition of concatenation $x \circ y$ is a mapping from $[1..\operatorname{len}(x) + \operatorname{len}(y)]$ to $\Sigma$. 

Also, from the definition of the length of a word: $\operatorname{len}(x \circ y)$ is the cardinality of the domain of $x \circ y$ when viewed as a sequence. 

Hence $\operatorname{len}(x \circ y) = \operatorname{len}(x) + \operatorname{len}(y)$. 

$\blacksquare$





