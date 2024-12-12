# 

Source: https://proofwiki.org/wiki/De_M%C3%A9r%C3%A9%27s_Paradox

  This article was Featured Proof between 5 May 2013 and 20 June 2013.




Paradox
Which of these two is more probable?

Getting at least one six with four throws of a die;
Getting at least one double six with 24 throws of a pair of dice?

The self-styled Chevalier de Méré believed the two to be equiprobable, based on the following reasoning:

A pair of sixes on a single roll of two dice is the same probability as that of rolling two sixes on two rolls of one die.
The probability of rolling two sixes on two rolls is $1/6$ as likely as one six in one roll.
To make up for this, a pair of dice should therefore be rolled six times for every one roll of a single die in order to get the same chance of a pair of sixes.
Therefore, rolling a pair of dice six times as often as rolling one die should equal the probabilities.
So rolling 2 dice 24 times should result in as many double sixes as getting 1 six throwing 4 dice.
However, betting on getting 2 sixes when rolling 24 times, he lost consistently.


Resolution
As throwing a die is an experiment with a finite number of equiprobable outcomes, we can use the Classical Probability Model.
There are six sides to a die, so there is $1/6$ probability for a six to turn up in one throw.
That is, by Elementary Properties of Probability Measure there is a $1 - \frac 1 6 = \frac 5 6$ probability for a six not to turn up.

When you throw a die $4$ times, by Probability of Independent Events Not Happening, there is $\left({1 - \frac 1 6}\right)^4 = \left({\frac 5 6}\right)^4$ probability of a six not turning up at all.
So by Probability of Occurrence of At Least One Independent Event, there is a probability of $1 - \left({\frac 5 6}\right)^4$ of getting at least one six with $4$ rolls of a die.
Doing the arithmetic gives you a probability of $> 0.5$, or in favour of a six appearing in 4 rolls.

Now when you throw a pair of dice, from the definition of independent events, there is a $\left({\frac 1 6}\right)^2 = \frac 1 {36}$ probability of a pair of sixes appearing.
That is, by Elementary Properties of Probability Measure, $\frac {35} {36}$ for a pair of sixes not appearing.
So by Probability of Occurrence of At Least One Independent Event there is a probability of $1 - \left({\frac {35} {36}}\right)^{24}$ of getting at least one pair of sixes with $24$ rolls of a pair of dice.
Doing the arithmetic gives you a probability of $< 0.5$, or in favour of a pair of sixes not appearing in 24 rolls.
$\blacksquare$


Consequence
This is a veridical paradox.
Counter-intuitively, the odds are distributed differently from how they would be expected to be.


Source of Name
This entry was named for Chevalier de Méré.


Historical Note
The Chevalier de Méré first raised this question in the $17$th century.
He believed the two events described should have the same probabilities.
Empirical investigation (in other words: he found he was losing more money than he believed he ought to have been doing) caused him to rethink this.
Hence he posed this problem to his friend mathematician Blaise Pascal, who solved it.


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.5$: Discrete sample spaces: Exercise $16$
1995: Merrilee H. Salmon: Introduction to Logic and Critical Thinking: $\S 6.1$
Weisstein, Eric W. "de Méré's Problem." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/deMeresProblem.html




